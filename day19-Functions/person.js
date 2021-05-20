//Create constructor functions 
function Person(name,city,age){
    this.name= name
    this.city=city
    this.age=age
    this.details=function(){
        return `${this.name} (${this.age}) lives in ${this.city}.`
    }  
}


const p1=new Person('rakesh','mumbai',29)
console.log(p1.details())
const p2=new Person('ravi','bangalore',23)
console.log(p2.details())
const p3=new Person('abhinava','mysore',25)
console.log(p3.details())

// const p1={
//     name:'rahul',
//     city:'mumbai',
//     gender:'male',
//     num:1

// }

// const p2={
//     name='rakesh',
//     city='chennai', 
//     gender:'male',
//     num:2
// }
// const p3={
//     name='roopa',
//     city='tumkur',
     
//     gender='female'
// }

// const p4={
//     name='shravya',
//     city='hyd',
     
//     gender='female'
// }