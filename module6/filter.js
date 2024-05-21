// you have to check for even numbers in an array and put them in a separate array

let num = [1,2,3,4,5,6,7]

let evenArray = []

for (let i=0;i<num.length; i++){
    if(num[i]%2==0){
        evenArray.push([num[i]])
    }
}

console.log(evenArray)

// filter method
// Filter returns a new array it will return it will return  those elements that mamtches the specific condtions
// if the conditions is true it will return the element for that condition and if it is false it will discard that 

let num1 = [1,2,3,4,5,6]

let evennum = num1.filter(function(n){
    return n%2==0
})
console.log(evennum)

let num11 = [-10,20,30,-40,-50,-60]

let let0 = num11.filter(function(n){
    return n<0
})
console.log(let0)
