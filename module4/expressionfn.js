// what is an expression

var a = 2+3
console.log(a)

//=============================

var add = function(a,b){
    console.log(a+b)
}
add(3, 4)

//================================

var add = function(a,b){
    return a+b
}
let result = add(3,5)
console.log(result)

//================================
var add = function(a,b){
    return a+b
}
let sum = add

var total = sum(2,3)

console.log(total)