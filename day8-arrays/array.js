const players = ['sachin','virat','dhoni']
players.push('yuvraj','rahul','ashwin')

console.log(players) //[ 'sachin', 'virat', 'dhoni', 'yuvraj', 'rahul', 'ashwin' ]

console.log(players.splice(2,1)) //[ 'dhoni' ]   - splice method adds/removes at the certain index  (index,deleteCount) //returns an array
console.log(players)   // [ 'sachin', 'virat', 'yuvraj', 'rahul', 'ashwin' ]
console.log(players.splice(2,0,'irfan'))  // []
console.log(players)  

const fruits = ['apple','mango','kiwi','watermelon']
console.log(fruits.includes('mango')) // true - returns true/false 
console.log(fruits.includes('strawberry'))  // false
console.log(fruits.indexOf('kiwi')) //2
console.log(fruits.indexOf('strawberry')) //-1

const numbers = [10,20,30,20]

console.log(numbers.indexOf(10)) //0 return type of indexOf is number
console.log(numbers.indexOf(20)) //1
console.log(numbers.lastIndexOf(20)) //3

console.log(fruits.slice(0,2)) //['apple','mango']   
console.log(fruits.slice(2,3)) //['kiwi']
console.log(fruits.slice(1)) // [ 'mango', 'kiwi', 'watermelon' ]


//split -> string to array
//join -> array to strings
console.log(fruits.join(' - ')) // apple - mango - kiwi - watermelon  // return type of join is array


console.log(fruits) //[ 'apple', 'mango', 'kiwi', 'watermelon' ]
 
//sort - convert any order into ascending order
console.log(players) //[ 'sachin', 'virat', 'irfan', 'yuvraj', 'rahul', 'ashwin' ]
console.log(players.sort())  //[ 'ashwin', 'irfan', 'rahul', 'sachin', 'virat', 'yuvraj' ]
console.log(players) //[ 'ashwin', 'irfan', 'rahul', 'sachin', 'virat', 'yuvraj' ]

//reverse - 
console.log(fruits) // [ 'apple', 'mango', 'kiwi', 'watermelon' ]
console.log(fruits.reverse()) //[ 'watermelon', 'kiwi', 'mango', 'apple' ]
console.log(fruits) //[ 'watermelon', 'kiwi', 'mango', 'apple' ]

