const counter={
    count: 0,
    getCount: function(){
        return `${this.count}`
    },
    up: function(){
    this.count++
    return  this.count
},
down:function(){
this.count = this.count-1
return this.count
},
reset:function(){
this.count =0
return this.count
},
incrementBy: function(n){
this.count=this.count +n
return this.count
}
}

console.log(counter.count) //0
console.log(counter.getCount())//0
console.log(counter.up())//1
console.log(counter.down())//-1
console.log(counter.reset()) //0
console.log(counter.incrementBy(7))