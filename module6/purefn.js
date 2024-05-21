let a = 2
// impure function 
function addImpure(x){
    console.log(x+a)
    a++
}

addImpure(2)// 4
addImpure(2)// 5
addImpure(2)// 6

// Pure function

function addPure(x ,a){
    console.log(x+a)
    a++
}

addPure(2,3)// 5
addPure(2,3)// 5

function addPure(x ,a){
    return x+a
}

console.log(addPure(3,4))
