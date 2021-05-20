//var - hoisted
console.log(city) // undefined
var city = 'Bangalore'
console.log(city) // 'bangalore'

//let - do not get hoisted
// console.log(source)
//ReferenceError: source is not listed
let source = 'mysore'
console.log(source) //'mysore'

//const - do not get hoisted
//ReferenceError: destination is not defined
//console.log(destination)
const destination = 'bangalore'
console.log(destination) //'bangalore'