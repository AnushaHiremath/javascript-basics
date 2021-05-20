//es6- arrow functions
//only with function expressions & anonymous functions

//es5 function 
const sum = function(n1,n2){
    return n1+n2
}

//es6 function with arrow function
const sum1=(n1,n2)=>{
    return n1+n2
}
console.log(sum1(10,20))//30

const numbers=[10,15,20,25,30]
//filter with es5 arrow function
const result = numbers.filter((ele) => { 
    return ele % 2 == 0
})
console.log(result)//[10,20,30]


//filter with es6 arrow function
const result1 = numbers.filter(ele => {
    return ele % 2 == 0
})
console.log(result1)//[10,20,30]

//filter with es6 arrow function
//if only 1 arg passed -() is optional
//if there is only 1 statement to be executed -{ } is option,return key is option and the statement to be written next to=>
//Instead of writing out the keyword function, we use the => arrow to indicate a function
//Arrow functions are always anonymous functions and a type of function expression. 

const result2=numbers.filter(ele=> ele%2==0)
console.log(numbers.filter(ele=> ele%2==0))

numbers.forEach((ele,i)=>console.log(i,ele))



