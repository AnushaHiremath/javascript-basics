const city='bangalore'
//function expressions donot get hoisted -- interview question
//console.log(sum(15,25))

//when u assign a function as a value to a variable,we call it as function expressions
///we can pass functions as arguments to other functions

const sum = function(n1,n2){
    //anonymous function - a function without a name
    //argumnets
    //default parameters via es5,es6
    //parameters are local variables
    //less args then params undefined, more args gets ignore
    return n1+n2
}

console.log(city)
console.log(sum) //
console.log(sum(10,20))//30