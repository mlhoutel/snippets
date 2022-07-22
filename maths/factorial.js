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

console.log(factorial(3))
console.log(factorial(10))
console.log(binomial(10, 20))
console.log(binomial(3, 7))