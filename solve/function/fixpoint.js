// Fixpoint : https://en.wikipedia.org/wiki/Fixed-point_iteration

fixpoint = (fn, start, delta) => {
    const MAX_ITER = 10 // max number or iteration before stopping

    iter = (fx, value, delta, c = 0) => {
        if (c > MAX_ITER) throw `Method doesn't converges with the start at ${start} in the allowed duration (${MAX_ITER} iters)`

        const next = fx(value)

        if (Math.abs(value - next) < delta) return value

        return iter(fx, next, delta, c + 1)
    }

    fx = (x) => x + fn(x)

    return iter(fx, fx(start), delta)
}

// sin(x) = 0 <=> x = 3.1415926520823465
console.log("sin(x) = 0 <=> x =", fixpoint(Math.sin, 2, 0.0001))

// cos(x) = 0 <=> x = 1.5707963255168476
console.log("cos(x) = 0 <=> x =", fixpoint(Math.cos, -1, 0.0001))