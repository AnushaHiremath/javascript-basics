function add(){
    console.log(arguments)
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum
}

console.log(add(10,20))//30
console.log(add(10,20,30))//60
console.log(add(10,20,30,40))//100

//method over loading- function with the same name - able to handle mutiple number of arguments