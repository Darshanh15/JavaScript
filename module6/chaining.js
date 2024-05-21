let arr = [
    {name: "A", age: 11, gender: "M"},
    {name: "B", age: 12, gender: "F"},
    {name: "C", age: 11, gender: "M"},
    {name: "D", age: 13, gender: "F"},
    {name: "E", age: 11, gender: "M"},
    {name: "F", age: 13, gender: "F"},
    {name: "G", age: 16, gender: "M"},
    {name: "H", age: 14, gender: "F"},
    {name: "I", age: 11, gender: "M"},
]
// age of all the men(males)

let males = arr.filter(function(obj){
    return obj.gender == 'M'
})

let malesage = males.map(function(obj){
    return obj.age
})

console.log(males)
console.log(malesage)

// fillter and map in one code

let males1 = arr.filter(function(obj){
    return obj.gender == 'M'
}).map(function(a){
    return a.age
})

console.log(males1)

// from the transaction array filter out positive element and calculate the total amount 
// use filetr and reduce to achive this

const tr = [100,200,300,-700,-800,400]

let pfl = tr.filter(function(a){
    return a>0
}).reduce(function(acc, value){
    updatevalue = acc+value
    return updatevalue

},0)

console.log(pfl)