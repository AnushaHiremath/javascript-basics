const numbers=[10,20,30,40,50]

//map over numbers return [15,25,35,45,55]

//es5 function
const result=numbers.map(ele=>{
    return ele+5
})

console.log(result)

//es6 function
const result2=numbers.map(ele=> ele+5)

console.log(result2)