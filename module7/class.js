class Person {
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }
    welcome(){
        console.log(`well come to ${this.name}`)
    }
}

let person1 = new Person('darsahnn', 20)
let person2 = new Person('gowda', 24)
let person3 = new Person('shankti', 25)
let person4 = new Person('boss', 26)

console.log(person1)// Person { name: 'darsahnn', age: 20 }
console.log(person2) // Person { name: 'gowda', age: 24 }
console.log(person3)// Person { name: 'shankti', age: 25 }

person1.welcome()// well come to darsahnn