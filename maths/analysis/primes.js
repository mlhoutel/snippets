// Prime factors: https://simple.wikipedia.org/wiki/Prime_factorization
// Crible primes: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

factors = (n) => {
    let k = 2
    const primes = []
    while (k * k <= n) {
        if (n % k == 0) {
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

    for (let p = 3; p <= max && primes.length < number; p += 2) {
        let prime = true

        for (let pp of primes) {
            if (p % pp == 0) {
                prime = false
                break
            }
        }

        if (prime) primes.push(p)
    }

    return primes
}

// factors 120 = [ 2, 2, 2, 3, 5 ]
console.log("factors 120 =", factors(120))

// crible 1000 = [ 2, 3, 5, 7, 11, 13, ...]
console.log("crible 1000 =", crible(1000))