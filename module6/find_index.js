// find return the first element of an array that satisfy the condition

const transactions = [1000,2000,3000, -465,700,]

const fWithDrawal = transactions.find(function(n){
    return n<0
})

console.log("index value"+fWithDrawal)

// find Inndex

let fWithDrawalIndex = transactions.findIndex(function(n){
    return n<0
})
console.log('index'+fWithDrawalIndex)