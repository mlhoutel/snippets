// Prime factors
// Crible primes

factors = (n) => {
    let k = 2
    const primes = []
    while (k*k <= n) {
        if (n%k == 0) {
            primes.push(k)
            n /= k
        } else {
            k++
        }
    }

    if (n > 1) primes.push(n)

    return primes
}

crible = (max, number = 1000000) => {
    const primes = []

    if (max >= 2) primes.push(2)

    for (let p = 3; p <= max && primes.length <  number; p += 2) {
        let prime = true

        for (let pp of primes) {
            if (p%pp == 0) { 
                prime = false
                break
            }
        }

        if (prime) primes.push(p)
    }

    return primes
}

console.log(factors(120))
console.log(crible(1000))