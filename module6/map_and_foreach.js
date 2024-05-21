// higer order function: maping


let arr = [1,2,3,4,5]

let sqaureArr = []

for(let i = 0; i<arr.length; i++){
    sqaureArr.push(arr[i]*arr[i])
}

console.log(sqaureArr)

// maping
// Map will loop through every of your array and will perfrom specific oparations that you have provide
// map method will always return you a new array with your results

const num = [1,2,3,4,5,6]

const sqauredNum = num.map(function(n){
    return n*n
})

console.log(sqauredNum)

const transactions = [1000, 2000, 3000, 4000, -5000, 6000, -4500]

const inrToDoller = transactions.map((a)=>{
    return (a/80).toFixed(0)
})

console.log(inrToDoller)// map is given a array formet 

// for each mehtod

const transactions1 = [1000, 2000, 3000, 4000, -5000, 6000, -4500]

const inrToDoller1 = transactions1.map((a)=>{
    return console.log(((a/80).toFixed(0)))
})
// for each output is nothig 
