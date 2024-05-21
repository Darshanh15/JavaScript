// hoisting
var a = 'hi'

function greet(){
    console.log('hello js')
}

console.log(a) // hi
greet() // hello js

//======================================

console.log(a) // undefined
greet() // hello js

var a = 'hi'

function greet(){
    console.log('hello js')
}
//========================================

