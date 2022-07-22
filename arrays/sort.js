// Merge sort https://en.wikipedia.org/wiki/Merge_sort

sort = (arr) => {
    if (arr.length < 2) return arr

    const half = arr.length / 2

    merge = (left, right) => {
       const arr = []
    
       while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift())  
            } else {
                arr.push(right.shift()) 
            }
        }
        
        return [ ...arr, ...left, ...right ]
    }

    const left = arr.splice(0, half)
    return merge(sort(left),sort(arr))
}

console.log(sort([...Array(1000).keys()].map(() => Math.floor(Math.random() * 1000))))