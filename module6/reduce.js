// you need the some of every element in an array

let num = [1,2,3,4,5,10]

let sum = 0 //accumeleat 

for(let i=0; i<num.length; i++){
    sum = sum+num[i]
}

console.log(sum)

// Reduce method

let result = num.reduce(function(acc , value){
    let updatedsum = acc+value
    return updatedsum
},0)

console.log(result)

let result1 = num.reduce(function(acc , value){
    let updatedsum = acc*value
    return updatedsum
},1)

console.log(result1)