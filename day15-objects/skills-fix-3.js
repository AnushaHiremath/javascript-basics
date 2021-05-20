//bind method - what is the purpose of bind method??
//the argument passed to the bind method(obj) will now become the value of this keyword inside the function
//why 
//when we have function we can use bind method


const developer={
    name: 'rajesh',
    skills:['js','node','react','py'],
    showSkills:function(){
        this.skills.forEach(function(s){
            //this = global object
            console.log(`${this.name} knows ${s}`)
        }.bind(this)) //the argument passed to the bind method(obj) will now become the value of this keyword inside the function
    }
}

developer.showSkills()

// rajesh knows js
// rajesh knows node
// rajesh knows react
// rajesh knows py