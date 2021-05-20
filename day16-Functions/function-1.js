function add(n1,n2){
    // console.log(n1,n2) //1 undefined undefined
    // console.log(n1,n2) //2 10 undefined
     console.log(n1,n2) //3 10 20
    return n1 + n2
}

//if we pass less arguments, parameters will hold undefined 
//console.log(add()) // NaN
//console.log(add(10)) //2 NaN


//When we pass more arguments, extra argumnets are just ignored
//3rd argument is ignored
console.log(add(10,20,50)) //30