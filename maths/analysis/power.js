// Exponentiation : https://en.wikipedia.org/wiki/Exponentiation

const I = 12
const N = 7

div = (i, n) => Math.floor(i / n) // integer division

// O(n) power function
pow = (i, n) => n == 0 ? 1 : i * pow(i, n-1)

// O(log(n)) power function
pow_opt = (i, n, DIVIDER = 2) => {
    pow_rec = (i, n) => {
        if (n == 1) return i

        const remain = n % DIVIDER
        const mult = remain == 0 ? div(n, DIVIDER) : div((n - 1), DIVIDER)
        
        const rec = pow_opt(i, mult)
        let val = rec
        for (let x = 0; x < DIVIDER-1; x++) val *= rec
        for (let x = 0; x < remain; x++) val *= i
    
        return val
    }

    if (n == 0) return 1                // zero pow
    if (n > 0) return pow_rec(i, n)     // positive pow
    return div(1, pow_rec(i, -n))       // negative pow
}

// 12^7 = 35831808
console.log("12^7 =", pow(I, N))

// 12^7 (2) = 35831808
console.log("12^7 (2) =", pow_opt(I, N))

// 12^7 (3) = 35831808
console.log("12^7 (3) =", pow_opt(I, N, 3))

// 12^7 (4) = 35831808
console.log("12^7 (4) =", pow_opt(I, N, 4))