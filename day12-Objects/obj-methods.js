const employee={
    id: 1,
    name:'mani',
    gender:'male'
}

//read properties from an object 
console.log(employee.name) //'mani'
console.log(employee['name']) //'mani'
console.log(employee.salary)  //undefined

console.log(employee) //{ id: 1, name: 'mani', gender: 'male' }

//add property to an object or key: value
employee.email='email@gmail.com'
console.log(employee) // { id: 1, name: 'mani', gender: 'male', email: 'email@gmail.com' }

employee['salary'] = 65200
console.log(employee)

// {
//     id: 1,
//     name: 'mani',
//     gender: 'male', 
//     email: 'email@gmail.com',
//     salary: 65200
//   }


//update properties
employee.email='mani@yahoo.com'
console.log(employee)

//delete properties
delete employee.gender
console.log(employee)

//all keys
console.log(Object.keys(employee)) //{ id: 1, name: 'mani', email: 'mani@yahoo.com', salary: 65200 }

//all values
console.log(Object.values(employee)) //[1,'mani','mani@yahoo.com',65000]

//total key value pair
console.log(employee.length) //undefined
console.log(Object.keys(employee).length) //4

//know if a key / prop is  present
console.log(employee.hasOwnProperty('salary')) //true
console.log(employee.hasOwnProperty('age'))  //false
console.log(Object.keys(employee).includes('age'))  //false

//know if values is present
console.log(Object.values(employee).includes('mani')) //true

 