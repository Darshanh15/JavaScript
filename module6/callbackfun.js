function printfn(fn,name){
    console.log(fn)// darshan
    name('gowda')
}


function println(ln){
    console.log(ln)// gowda
}

printfn('darshan', println)// callback function

// 
const isEven = (n)=>{
    return n%2==0
}

let printResult = (evenFn, num) =>{
    const isNumEven = evenFn(num)
    console.log(`the number ${num} is an even Number ${isNumEven}`)
} 

printResult(isEven, 16)