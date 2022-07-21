const I = 12
const N = 7

div = (i, n) => Math.floor(i / n) // integer division

// O(n) power function
pow = (i, n) => n == 0 ? 1 : i * pow(i, n-1)

// O(n * log(n)) power function
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



console.log(pow(I, N))
console.log(pow_opt(I, N))
console.log(pow_opt(I, N, 3))
console.log(pow_opt(I, N, 4))