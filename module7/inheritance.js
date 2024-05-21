class Person{
    constructor(_name,_age){
        this.name = _name
        this.age = _age
    }
    welcome(){
        console.log(`welcome ${this.name}`)
    }
}

class Teacher extends Person{
    constructor(_name, _age){// constructor
        super(_name, _age)
        this.classStrength = this.classStrength
    }
    test(){
        super.welcome()// inherit the other class method
    }

}

class Student extends Person{
    constructor(_name, _age, _cgpa){
        super(_name, _age)
        this.cgpa = _cgpa
    }
}

let person1 = new Person('darshan', 35)
console.log(person1)// Person { name: 'darshan', age: 35 }

let techer1 = new Teacher('goeda', 40,  50)
console.log(techer1)// Teacher { name: 'goeda', age: 40, classStrength: undefined }

let student1 = new Student('gowda', 34, 7.9)
console.log(student1)// Student { name: 'gowda', age: 34, cgpa: 7.9 }

techer1.test()//
console.log(techer1)// Teacher { name: 'goeda', age: 40, classStrength: undefined }