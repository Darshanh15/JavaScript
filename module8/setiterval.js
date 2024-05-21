// function hello(){
//     console.log('hello')
// }

// setInterval(hello, 100)

// set and stop

function hello(){
    console.log('hello')
}

let timer = setInterval(hello, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 3000)