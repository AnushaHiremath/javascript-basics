//all primitives are pass by value

let fruit='mango'

function changeFruit(fruit){
    console.log('inside function before re-assignment',fruit) //'mango'//2
    fruit ='kiwi'
    console.log('inside function after re-assignment',fruit) //'kiwi'//3
    return fruit
}

console.log('before function call',fruit) //'mango'//1
console.log(changeFruit('return value from function',fruit)) //'kiwi'//4
console.log('after function call',fruit) //'mango'//5