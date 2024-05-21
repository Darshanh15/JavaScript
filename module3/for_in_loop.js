// in js the for-in loop allows you to loop through the properties of an object.
// The statements of code founs within the loop body will be executed once for each property of the objects

var colors = {
    primary : 'Blue',
    secondary : 'Red',
    tertiary : 'white'
}

// syntax

for(var color in colors){
    console.log(colors[color])
    console.log(color +' --> ' +colors[color])
}

var colorarr = ['red', 'green', 'blue', 'orange']

for(var color1 in colorarr){
    console.log(colorarr[color1])
    console.log(color1 +' --> ' +colorarr[color])
}