// The destructuring assignament syntax is a javascript expression that makes it possion to unpack value
// from arrays or properties from objects into distinct variables


let arr = ['hi', 'my', 'name', 'is']

let [a,b,c,d,e,f] = arr

console.log(a)// hi
console.log(f)// undefined
// =================================================
// destructuring objects

let myobj = {
    name : 'darshan',
    age : 25,
    gender : 'Male'
}

let {h,i,j} = myobj
console.log(h)// undefined
console.log(i)// undefined
console.log(j)// undefined

// ====================================

let myobj1 = {
    name : 'darshan',
    age : 25,
    gender : 'Male'
}

let {name,age,gender} = myobj1
console.log(name)// darshan
console.log(age)// 25
console.log(gender)// Male
//================================================


let myobj2 = {
    name1 : 'darshan',
    age1 : 25,
    gender1 : 'Male',
    adress : {
        city : 'ind',
        pin : 12345
    }
}

let {name1 : n,age1 : ag ,gender1 : g, adress :{city : m}} = myobj2
console.log(n)// darshan
console.log(ag)// 25
console.log(g)// Male
console.log(m)// Male

// =============================================




