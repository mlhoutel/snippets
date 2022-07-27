// https://en.wikipedia.org/wiki/Gauss%E2%80%93Seidel_method
//We know that the Gauss-Seidel method converges twice as fast as the Jacobi method
// if the matrix A is strictly dominant diagonal

siedel = (A, b, x0, epsilon) => {
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
            if (j > i) {
                x1[i] -= A[i][j] * x[j]
            } else if (j < i) {
                x1[i] -= A[i][j] * x1[j]
            }
        }
        x1[i] /= A[i][i]
    }

    return x1
}

// With strictly doinant diagonal
const A = [
    [1, 1, 1],
    [1, 0.4, 0],
    [10, 5, 1]
]

const b = [24, 14, 152]

// [ 12, 5, 7 ]
console.log(siedel(A, b, [1, 1, 1], 0.0001))

/*
A = [
    [1, 1, 1],
    [1, 0.4, 0],
    [10, 5, 1]
]

b = [24, 14, 152]

x = [ 12, 5, 7 ]
*/