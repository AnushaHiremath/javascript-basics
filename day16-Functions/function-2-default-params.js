//set default parameter values
//es5
function add(n1,n2){
    n1 = typeof n1 =='undefined' ? 0: n1
    n2 = typeof n2 =='undefined' ? 0: n2


// if(typeof n1== 'undefined'){
// n1=0
// }
// else{
//     n1=n1
// }

// if(typeof n2 =='undefined'){
//     n2=0
// }
// else{
//     n2=n2
// }

console.log(n1,n2)
return n1+n2
}

console.log(add(10,20)) //30
console.log(add())
console.log(add(10))

//es6 syntax
//what are the difference b/w es5 and es6
//setting new parameters to your functions
function sum(n1=0,n2=0){
    console.log(n1,n2)
    return n1+ n2
}

console.log(sum())
console.log(sum(20))
console.log(sum(30,40))