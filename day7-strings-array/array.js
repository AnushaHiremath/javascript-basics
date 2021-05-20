//Array
//ordered, integer indexed, collection of values

const p1='sachin',p2='virat',p3='sehwag',p4='rahul'
console.log(p1) //'sachin'

const players = ['sachin','virat','sehwag','rahul']  //new Array('sachin','virat','sehwag','rahul')

console.log(players[0])
console.log(players)

const fruits =['apple','mango','kiwi','watermelon']

console.log(typeof fruits) //'object'
//properties and methods
console.log(fruits.length) //4

//methods
//mutable methods - that changes the original array
//adds an element/s to the end of the array 
console.log(players.push('dhoni')) //5
console.log(players) //['sachin','virat','sehwag','rahul','dhoni']

//adds an element/s to the beginning of the array
console.log(players.unshift('shikar')) //5
console.log(players) //['shikar','sachin','virat','sehwag','rahul']

//remove element/s from the end of the array 
console.log(players.pop()) //'dhoni'
console.log(players) //['sachin','virat','sehwag']

//remove element/s from the beginning of the array
console.log(players.shift()) //'shikar'
console.log(players) //[sachin','virat','sehwag','rahul']




