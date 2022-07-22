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

console.log(dichotomy(Math.log, 6.21516781, 10, 1000))
console.log(dichotomy(Math.sin, 45, 0, Math.PI / 2))
console.log(dichotomy((x) => Math.exp(x), 7.38905609893065, 0, 10, 0.000000001))

