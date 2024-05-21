// inbulit js array method
var arr = [11,12,13,14]
//pop
arr.pop()
console.log('pop arr',arr) // [ 11, 12, 13 ]

// push
arr.push(100)
console.log('push arr',arr) // [ 11, 12, 13, 100 ]

// shift
var d = arr.shift()
console.log(d) // 11
console.log('shift arr',arr) // [ 12, 13, 100 ]

// unshift
arr.unshift(102)
console.log('unshift arr',arr)// [ 102, 12, 13, 100 ]
