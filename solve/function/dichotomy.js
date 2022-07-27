// Dichotomic search: https://en.wikipedia.org/wiki/Dichotomic_search

dichotomy = (fn, target, start = 0, end = 10000, delta = 1) => {
    while (start + delta < end) {
        const center = (start + end) / 2
        if (fn(center) > target) {
            end = center
        } else {
            start = center
        }
    }

    return start
}

// log(x) = 6.21516781 <=> x = 500.166015625
console.log("log(x) = 6.21516781 <=> x =", dichotomy(Math.log, 6.21516781, 10, 1000))

// sin(x) = 45 <=> x = 0.7853981633974483
console.log("sin(x) = 45 <=> x =", dichotomy(Math.sin, 45, 0, Math.PI / 2))

// exp(x) = 7.38905609893065 <=> x = 1.9999999995343387
console.log("exp(x) = 7.38905609893065 <=> x =", dichotomy((x) => Math.exp(x), 7.38905609893065, 0, 10, 0.000000001))
