const developer={
    name: 'rajesh',
    skills:['js','node','react','py'],
    showSkills:function(){
        this.skills.forEach(function(s){
            //this = global object
            console.log(`${this.name} knows ${s}`)
        })
    }
}

developer.showSkills()
/*
undefined knows js
undefined knows node
undefined knows react
undefined knows py
*/
/*
rajesh knows js
rajesh knows node
rajesh knows react
rajesh knows py
*/