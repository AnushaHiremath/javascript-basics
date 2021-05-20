const person={
    firstName:'sachin',
    lastName:'tendulkar',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    greet:function(){
        return `my name is ${this.firstName}`
    },
    sayHi:function(str){
        return `hi ${str}, my name is ${this.firstName}`
    }
}


console.log(person.fullName()) //'sachin tendulkar'

console.log(person.greet())//'my name is sachin'

console.log(person.sayHi('mani'))//'hi mani, my name is sachin'