//all objects are pass by reference
const person={
    name:'mohan',
    city:'tumkur'
}

function changeInfo(person){
    console.log(person) //{ name: 'mohan', city: 'tumkur' }//2
    person.city='bangalore'
    console.log(person) //{ name: 'mohan', city: 'bangalore' }//3
    return person
}

console.log(person) //{ name: 'mohan', city: 'tumkur' }//1
console.log(changeInfo(person)) //{ name: 'mohan', city: 'bangalore' }//4
console.log(person) //{ name: 'mohan', city: 'bangalore' }//5