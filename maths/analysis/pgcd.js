// pgcd : https://en.wikipedia.org/wiki/Greatest_common_divisor
// ppcm : https://en.wikipedia.org/wiki/Least_common_multiple

pgcd = ((a, b) => (b === 0) ? a : pgcd(b, a % b))
ppcm = ((a, b) => (a * b) / pgcd(a, b))

// pgcd 25 10 = 5
console.log("pgcd 25 10 =", pgcd(25, 10))

// ppcm 25 10 = 50
console.log("ppcm 25 10 =", ppcm(25, 10))

// pgcd 25 30 10 15] = 5
console.log("pgcd 25 30 10 15] =", [25, 30, 10, 15].reduce((acc, val) => pgcd(acc, val)))

// ppcm 25 30 10 15 = 150
console.log("ppcm 25 30 10 15 =", [25, 30, 10, 15].reduce((acc, val) => ppcm(acc, val)))