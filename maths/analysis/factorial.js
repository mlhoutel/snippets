// factorial : https://en.wikipedia.org/wiki/Factorial
// binomial coefficient : https://en.wikipedia.org/wiki/Binomial_coefficient

factorial = (n) => n == 0 ? 1 : n * factorial(n-1)
binomial = (k, n) => {
    let a = 1
    let b = 1
    while (k > 0) {
        a *= (n-k+1)
        b*=k
        k--
    }
    return a/b
}

// !3 = 6
console.log("!3 =", factorial(3))

// !10 = 3628800
console.log("!10 =", factorial(10))

// (10 20) = 184756
console.log("(10 20) =", binomial(10, 20))

// (3 7) = 35
console.log("(3 7) =", binomial(3, 7))