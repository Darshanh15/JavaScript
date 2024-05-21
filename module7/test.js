'use strict'

let a = 20 
// console.log(a)// 20

console.log(this)// Empty object {}

function displayThis(){
    console.log(this)
}
displayThis()

let myobj = {
    name: 'darshan',
    age : 34,
    myfn : function(){
        console.log(this.name)
    }
}

myobj.myfn()


let myobj1 = {
    name: 'darshan',
    age : 34,
    myfn1 : function(){
        function myfn2(){
            consle.log(this.name)
        }
        return myfn2
    }
}

myobj1.myfn2()