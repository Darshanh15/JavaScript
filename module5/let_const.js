var a = 10
var a = 10

let b = 20
// let b = 30 // this will be shwon error

if(true){
    let c = 20
    console.log(c)// 20 
}
//  console.log(c) // error

// const

const d = 10
d = 20 // error
// const d = 10 // error


// ================================================
//        |   Redection  | Reassignment | Scoping |
// ================================================
// var    |     ok       |      ok      | fnction |
// let    |     no       |      ok      | block   |
// const  |     no       |      no      | block   |
