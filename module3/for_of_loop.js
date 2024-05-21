// The for of statement creates a loop iterating over iterable objects
// Including : builts-in String, Array, array-like objects like Nodelist and also map and set

var scores = [60, 90, 80, 70]

// syntax

for(var score of scores){
    console.log(score)
    score = score+5
    console.log(score)
}

// method  - entries()

let colors = ['red', 'white', 'red', 'green']

for (var [index, color] of colors.entries()){
    console.log(index+ ' --> '+ color)
}

// Strings

var str = 'Scalr'

for(var c of str){
    console.log(c)
}