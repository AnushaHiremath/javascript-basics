//es5
var name='arjun',city='mysore'

var person={
    name:name,
    city:city
}

console.log(person)//{ name: 'mysore', city: 'mysore' }

//es6 -concise properties
//when property name is same as variable name,use only the variable name

const firstName='john',lastName='mark'
const user={
    firstName,
    lastName
}

console.log(user)//{ firstName: 'john', lastName: 'mark' }

var student ={
    name:'ravi',
    details:function(){
        return 'name is ' +this.name
    }
}

console.log(student.details()) //name is ravi
//es6 feature - concise methods 
const emp={
    name: 'akshay',
    details(){
        return `emp name is ${this.name}`
    }
}

console.log(emp.details()) //emp name is akshay