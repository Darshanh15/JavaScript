// setTimeout(cb, 2000)

console.log('before')

function greet(){
    console.log('hello from the set timeout')
}

setTimeout(greet, 5000)

console.log('after')
