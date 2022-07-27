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

const combinations = array.map((r) => {
    const based = r.toString(S)                 // convert to base
    const filler = "0".repeat(N - based.length) // prepend with 0 
    return filler + based                       // assert length
})

// combinations = ['0000000000', '0000000001', '0000000002', '0000000010', '0000000011', ... , '2222222222']
console.log("combinations =", combinations)

const prepend = (e, ls) => ls.map((sl) => [e, ...sl])

// prepend = [ [ 1, 2, 3 ], [ 1, 3, 4 ] ]
console.log("prepend =", prepend(1, [[2, 3], [3, 4]]))

const lists = (ls) => {
    if (!ls.length) return [[]]

    const [head, ...tail] = ls
    const sublist = lists(tail)
    const appended = prepend(head, sublist)

    return [...sublist, ...appended]
}

// lists = [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
console.log("lists =", lists([1, 2, 3]))

const inject = (e, ls) => {
    if (!ls.length) return [[e]]

    const [head, ...tail] = ls
    const current = [e, ...ls]
    const following = prepend(head, inject(e, tail))

    return [current, ...following]
}

// inject = [ [ 1, 1, 2, 3 ], [ 1, 1, 2, 3 ], [ 1, 2, 1, 3 ], [ 1, 2, 3, 1 ] ]
console.log("inject =", inject(1, [1, 2, 3]))

const permuts = (ls) => {
    if (!ls.length) return [[]]

    const [head, ...tail] = ls

    return permuts(tail).map((sl) => inject(head, sl)).flat()
}

// permuts = [ [1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1] ]
console.log("permuts =", permuts([1, 2, 3]))

const arrangements = (ls) => lists(ls).reduce((acc, sl) => [...acc, ...permuts(sl)])

// arrangements = [ [3], [ 2 ], [2, 3], [3, 2], [1], [1, 3], [3, 1], [1, 2], [2, 1], [1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1] ]
console.log("arrangements =", arrangements([1, 2, 3]))

const partitions = (ls) => {
    if (!ls.length) return []
    if (ls.length === 2) return [[[ls[0]], [ls[1]]]]

    const [head, ...tail] = ls

    const first = [[head], tail]
    const remain = partitions(tail).map(([ls, rs]) => [[head, ...ls], rs])

    return [first, ...remain]
}

// partitions = [ [ [ 1 ], [ 2, 3 ] ], [ [ 1, 2 ], [ 3 ] ] ]
console.log("partitions =", partitions([1, 2, 3]))
