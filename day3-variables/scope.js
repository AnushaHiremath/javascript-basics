//var - function scoped - life of a variable

function display(){
        console.log(msg) //undefined
        if(true){
            var msg ='hi there'
        }
        return msg
    }

console.log(display())


//let & const - block scoped

function print(){
    //console.log(msg)
    let msg
    if(true) {   
         msg = 'hello there'
    }
    return msg
}

console.log(print())