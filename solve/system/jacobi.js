// https://en.wikipedia.org/wiki/Jacobi_method
// Jacobi method (Iterative method)
// We know that the method works if the diagonal of the matrix A is strictly dominant
// => Don't hesitate to tweak the matrix to reach this configuration

jacobi = (A, b, x0, epsilon) => {
    let diff = epsilon + 1
    let x = x0 // initial value

    while (diff > epsilon) {
        const temp_x = x
        x = iter(A, b, x)

        diff_x_temp = x.map((_, i) => x[i] - temp_x[i])

        // https://en.wikipedia.org/wiki/Uniform_norm
        diff = Math.max(...diff_x_temp.map(Math.abs))
    }

    return x
}

iter = (A, b, x) => {
    const n = A.length
    let x1 = [...x] // copy values

    for (let i = 0; i < n; i++) {
        x1[i] = b[i]
        for (let j = 0; j < n; j++) {
            if (j != i) {
                x1[i] -= A[i][j] * x[j]
            }
        }
        x1[i] /= A[i][i]
    }

    return x1
}

// With strictly doinant diagonal
const A = [
    [4, -1, 0],
    [-1, 4, -1],
    [0, -1, 4]
]

const b = [6, 4, 6]

// [ 1.999969482421875, 1.999969482421875, 1.999969482421875 ]
console.log(jacobi(A, b, [1, 1, 1], 0.0001))

/*
A = [
    [4, -1, 0],
    [-1, 4, -1],
    [0, -1, 4]
] 

b = [6, 4, 6]

x = [ 2, 2, 2 ]
*/