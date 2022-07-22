// pgcd : https://en.wikipedia.org/wiki/Greatest_common_divisor
// ppcm : https://en.wikipedia.org/wiki/Least_common_multiple

pgcd = (a, b) => b == 0 ? a : pgcd(b, a % b)
ppcm = (a, b) => a * b / pgcd(a, b)

console.log(pgcd(25, 10))
console.log(ppcm(25, 10))

console.log([25, 30, 10, 15].reduce((acc, val) => pgcd(acc, val)))
console.log([25, 30, 10, 15].reduce((acc, val) => ppcm(acc, val)))