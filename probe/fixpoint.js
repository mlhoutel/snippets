// Fixpoint : https://en.wikipedia.org/wiki/Fixed-point_iteration

fixpoint = (start, delta, fn) => {
    const MAX_ITER = 10 // max number or iteration before stopping

    iter = (value, delta, fx, c = 0) => {
        if (c > MAX_ITER) throw `Method doesn't converges with the start at ${start} in the allowed duration (${MAX_ITER} iters)`

        const next = fx(value)

        if (Math.abs(value - next) < delta) return value

        return iter(next, delta, fx, c+1)
    }

    fx = (x) => x + fn(x)

    return iter(fx(start), delta, fx)
}


console.log(fixpoint(2, 0.0001, Math.sin))
console.log(fixpoint(-1, 0.0001, Math.cos))