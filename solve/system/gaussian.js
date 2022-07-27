// https://en.wikipedia.org/wiki/Gaussian_elimination
// Gauss elimination (Direct method)
// 1. Triangulation of the square matrix A with b
// 2. Backward substitution to obtain the values of x

gauss = (A, b) => {
    [A, b] = triangulation(A, b)
    return subsitution(A, b)
}

// Transformation into a superior triangular matrix
triangulation = (A, b) => {
    const n = A.length
    for (let k = 0; k < n - 1; k++) {
        if (Math.abs(A[k][k]) < 0.00001) {
            throw "Triangulation is not possible with this matrix"
        }

        for (let i = k + 1; i < n; i++) {
            const m = A[i][k] / A[k][k]
            b[i] = b[i] - m * b[k]
            A[i][k] = 0

            for (let j = k + 1; j < n; j++) {
                A[i][j] -= m * A[k][j]
            }
        }
    }

    return [A, b]
}

// Retrograde substitution
subsitution = (A, b) => {
    const n = A.length
    let x = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        const j = n - i - 1
        x[j] = b[j]
        for (let k = j + 1; k < n; k++) {
            x[j] -= A[j][k] * x[k]
        }
        x[j] /= A[j][j]
    }

    return x
}


const A = [
    [1, 1, 1],
    [1, 0.4, 0],
    [10, 5, 1]
]

const b = [24, 14, 152]

// [ 11.999999999999993, 5.000000000000013, 6.999999999999992 ]
console.log(gauss(A, b))

/*
A = [
    [ 1, 1, 1 ],
    [ 0, -0.6, -1 ],
    [ 0, 0, -0.6... ]
] 

b = [ 24, -10, -4.6... ]

x = [ 12.0, 5.0, 7.0 ]
*/