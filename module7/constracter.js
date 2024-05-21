function createCar(_name, _company, _color){
    this.name = _name
    this.company = _company
    this.color = _color
}

let car1 = new createCar('x4', 'BMW', 'Red')
let car2 = new createCar('s-calss', 'mercedes', 'wight')
let car3 = new createCar('top', 'RR', 'green')

console.log(car1)
console.log(car2)
console.log(car3)

// ================================================

function createCar(_name, _company, _color){
    this.name = _name
    this.company = _company
    this.color = _color

    this.drive = function(){
        console.log(`i am driving ${this.name} and it is of ${this.color} color`)
    }
}

let car11 = new createCar('x4', 'BMW', 'Red')
let car22 = new createCar('s-calss', 'mercedes', 'wight')
let car33 = new createCar('top', 'RR', 'green')

car1.drive()