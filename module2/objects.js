// in js objects are in key value pair

var person = {
    fs : 'darshan',
    ls : 'gowda',
    age : 45,
    owncar : false
}
console.log(person)// { fs: 'darshan', ls: 'gowda', age: 45, owncar: false }

// dot notation

console.log(person.age) // 45

// bracket notation

console.log(person['fs']) // darsahn

var cap = {
    fn : 'boss',
    ln : 'gowda',
    age : 25,
    friends : ['darshan','gowda','shakti'],
    isAvenger : false,
    adres : {
        state : 'karnataka',
        city :{
            name : 'hassan',
            pincode : 123456
        }
    }
}

console.log(cap.friends[1]) //gowda
console.log(cap.adres.city.name) // hassan
cap.isAvenger = true
console.log(cap) // true

cap.movies = ['m1', 'm2', 'm3']
console.log(cap)// add it movies: ['m1, 'm2, 'm3']

