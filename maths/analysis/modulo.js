// Positive modulo : https://en.wikipedia.org/wiki/Modulo_operation
// For every input I and N, we want to assert that the result of the modulo is a positive number.

const I = -62
const N = 34

positive_modulo = (i, n) => (i % n + n) % n

// mod = -28
console.log("mod =", I % N)

// pos = 6
console.log("pos =", positive_modulo(I, N))