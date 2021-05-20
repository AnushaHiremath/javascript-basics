//to store values inside a program

var city
console.log(city) //undefined

//SyntaxError: Missing initializer in const declaration
//const location

state = 'karnataka'
console.log(state) //'karnataka'

const price = 25
const temp = 23.45

console.log(price,temp) //25 23.5

console.log(typeof city) //'undefined'
console.log(typeof state ) //'string'
console.log(typeof price) //'number'
console.log(typeof temp) //'number'

console.log(typeof typeof price) //'string'

const fruits = ['mango','kiwi','sapota']
console.log(fruits) //['mango','kiwi','sapota']

console.log(typeof fruits) //'object'

const person ={
    name: 'arjun',
    city : 'bangalore'
}

console.log(person)
console.log(typeof person) //'object'

console.log(Array.isArray(fruits)) //true
console.log(Array.isArray(person)) //false

const allowAccess = true
console.log(typeof allowAccess) //'boolean'

const details = function(){
    return 'hi there'
}

console.log(details) // [Function : details]
console.log(details()) // 'hi there'
console.log(typeof details) //'function'
















