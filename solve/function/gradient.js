derivative = (fn, x, delta) => (fn(x + delta) - fx(x)) / delta

taylor = (fn, x, delta) => (fn(x + delta) - fx(x - delta)) / (2 * delta)