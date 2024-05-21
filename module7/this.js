let myobj = {
    name: 'darshan',
    age : 34,
    myfn : function(){
        console.log(this)
    }
}

// myobj.myfn()// { name: 'darshan', age: 34, myfn: [Function: myfn] }

// =======================================

let myobj1 = {
    name: 'darshan',
    age : 34,
    myfn : function(){
        console.log(this.name)
    }
}

// myobj1.myfn()// darshan
// ===========================================

let myobj11 = {
    name: 'darshan',
    age : 34,
    myfn1 : function(){
        function myfn2(){
            consle.log(this)
        }
        myfn2()
    }
}

myobj11.myfn1()