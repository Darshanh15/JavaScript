let test1 = function(){
    console.log(1)
}

let test2 = function(a){
    console.log(a+2)
}

let test3 = function(a,b){
    console.log(a,b)
}

test1()//1

test2(2)//2

test3(4,6)//2,6
// ===========================================
let demo1 = ()=>{
    console.log(1)
}

let demo2 = (a)=>{
    console.log(a+2)
}

let demo3 = (a,b)=>{
    console.log(a,b)
}

demo1()//1

demo2(2)//2

demo3(4,6)//4,6
// ==============================

let demo4 = d =>{
    console.log(d)
}
demo4(2) //2

//=======one line function ==============

let demo5 = a => console.log(a+2)
demo5(33)

let demo6 = (a,b)=>console.log(a+b)
demo6(10,10)