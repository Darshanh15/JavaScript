const fs = require('fs')

console.log('first line')

let data = fs.readFileSync('f1.txt')

console.log('file 1 data--->'+ data)

let data2 = fs.readFileSync('f2.txt')

console.log('file 1 data--->'+ data2)

console.log('last line')
