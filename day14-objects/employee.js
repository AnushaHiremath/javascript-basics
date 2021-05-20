const emp={
    id:1,
    name:'rakesh',
    department:'tech',
    details:function(){
        //refer to current object via this
        return `${this.id} ${this.name} ${this.department}`
    }
}

console.log(emp.name) //'rakesh'
console.log(emp.details()) //'1 rakesh tech'