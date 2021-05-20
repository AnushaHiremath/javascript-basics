const calc={
    n1:10,
    n2:20,
    add:function(){
        return this.n1+this.n2
    },
    mul:function(){
        return this.n1*this.n2
    }
}

console.log(calc.add())//30
console.log(calc.mul()) //200