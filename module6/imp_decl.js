// imperative and declarative

// we will be given a number and we have to check if the sqaure if that number is even or odd

// imparative way of code
const a = 5

const aSqured = a*a

let inEven;

if (a*a % 2==0){
    isEven = true
}
else{
    isEven = false
}

console.log(isEven)

// Declartive way  of writing code

const checkForSqaute = (x)=> (x*x%2 ===0? true : false)


console.log(checkForSqaute(5)) //false 
