const developer={
    name: 'rajesh',
    skills:['js','node','react','py'],
    showSkills:function(){
         //this = current object
         //assign value of this to another variable,use that variable inside the function instead of this keyword
         //lexical scope
         const obj=this
         this.skills.forEach(function(s){
             console.log(`${obj.name} knows ${s}`)
         })
    }
}

developer.showSkills()

/*
rajesh knows js
rajesh knows node
rajesh knows react
rajesh knows py
*/
