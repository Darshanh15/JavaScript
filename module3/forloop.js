// loops are the statements that we can use to controle a flow of the program 
// var a = 'hello world'

// for(var i=0; i<10; i++){
//     console.log(a)
// }

// you have an array and you have to squre Each moment of that of that array

var num = [2,3,4,5,6,7,8]

var squrearr = [] // empty array

for(var i=0; i<num.length; i++){
    squrearr.push(num[i]*num[i])
}
console.log(squrearr)