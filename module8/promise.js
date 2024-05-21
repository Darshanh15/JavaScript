// how tp produce a promise 

let myPromise = new Promise(function(resolve, reject){
    const a = 4
    const b = 5
    
    setTimeout(()=>{
        if(a===b){
            resolve('the value are equal')
        }else{
            reject('the value are not equal')
        }
    }, 2000)
})


// // pending state
// console.log(myPromise)

// fulfiled - then method
// cosiming your promise

myPromise.then(function(result){
    console.log(result)
})// fulfiled 

myPromise.catch(function(filedResult){
    console.log(filedResult)
})// rejected