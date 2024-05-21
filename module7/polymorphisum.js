class Animal{


    sound(){
        console.log('animal make different sound')
    }
}

class Dog{


    sound(){
        console.log('dog bow bow ')
    }
}

class Cat{


    sound(){
        console.log('cat mewon')
    }
}

let Animal1 = new Animal()

let tommy = new Dog()

let percy = new Cat()

tommy.sound()// dog bow bow 

percy.sound()// cat mewon

Animal1.sound()// animal make different sound