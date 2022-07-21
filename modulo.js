// Positive modulo. For every input I, we want to 
// assert that the result of the modulo is a 
// positive number.

const I = -62
const N = 34

positive_modulo = (i, n) => (i % n + n) % n

console.log(I % N) // -28
console.log(positive_modulo(I, N)) // 6
