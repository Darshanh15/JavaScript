let myObj = {}

console.log(myObj)// GO AND CHECK IN HTML SERVER PAGE LOT OF OBJ IS THERE

let person = {
    name : 'darshan',
    age : 25
}

console.log(person)
console.log(person.hasOwnProperty('name'))// name property is there it will dispaly true
console.log(person.hasOwnProperty('gender'))// gender property is there it will dispaly false


// constructor fn

function Person(_name, _age){
    this.name = _name
    this.age = _age
}

let person2 = new Person('darsh', 34)
console.log(person2)