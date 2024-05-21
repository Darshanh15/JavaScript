console.log('hello')
console.log(this)// window object

function displayThis(){
    console.log(this)
}

displayThis()// window obj


let myobj = {
    name : 'darshan',
    age : 25,
    myfn : function(){
        console.log(this)
    }
}

myobj.myfn()
// {name: 'darshan', age: 25, myfn: ƒ},
// age : 25
// myfn : ƒ () name : "darshan"
// [[Prototype]] : Object