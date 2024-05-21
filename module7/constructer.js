function Person(_name, _age){
    var name = _name
    this.age = _age

    this.getName = function(){
        return name
    }
}


let person1 = new Person('darsh', 25)

console.log(person1.getName())