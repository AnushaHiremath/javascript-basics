//create class like features in js, we make use of constructor functions
//constructor functions-blueprint for objects
//define properties & methods

function Player(name,country){
    this.name = name
    this.country=country
    this.details=function(){
        return `${this.name} plays for ${this.country}`
    }
}

const p1=new Player('sachin','india')
console.log(p1)
console.log(p1.details())
p1.details()

const p2=new Player('virat','india')
console.log(p2)
console.log(p2.details())

const p3=new Player('dhoni','india')
console.log(p3)
console.log(p3.details())

const p4=new Player('pointing','australia')
console.log(p4)
console.log(p4.details())