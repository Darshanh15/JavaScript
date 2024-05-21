// some method

// some : Condition check : to get true or false based on  a condition
// it will return true if even 1 element satifies the condition

const tr = [-1000, -3000, -400, -500]

let result = tr.some(function(n){
    return n>0
})

console.log(result)

//every 

let resultEvery = tr.every(function(n){
    return n<0
})
console.log(resultEvery)