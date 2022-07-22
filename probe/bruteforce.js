// Say we have a problem where we want to test every combination
// for an array of object, with each object that can be in n states.

const N = 10; // The number of elements in our array
const S = 3; // The number of states in an element

// We know that we will have S^N possible combinations (the nb of
// array we want to generate).
const array = [...Array(Math.pow(S, N)).keys()]

// The best way of doing it (fast, light, clear) is to iterate over 
// a number of N digits in the base of S. The status of the n-th
// object will be reflected in the value of the n-th digit.

const result = array.map((r) => {
    const based = r.toString(S)                 // convert to base
    const filler = "0".repeat(N - based.length) // prepend with 0 
    return filler + based                       // assert length
}) 

console.log(result)