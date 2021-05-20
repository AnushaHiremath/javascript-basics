console.log(this) //{}

function showThis(){
    console.log(this) //global object - inside function()
}


console.log(showThis())

const person={
    name:'arjun',
    thisValue:function(){
        return this //current object  - inside method
    }
}

console.log(person.thisValue()) //{ name: 'arjun', thisValue: [Function: thisValue] }

function alterThis(){
    console.log(this)  //{name: 'deepa'} i.e current object
}

console.log(alterThis.bind({name: 'deepa'}))