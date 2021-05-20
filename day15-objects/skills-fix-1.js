const developer={
    name: 'rajesh',
    skills:['js','node','react','py'],
    showSkills:function(){
        // console.log('inside method',this)
        // for(let i=0;i<this.skills.length;i++){
        //     console.log(`${this.name} knows ${this.skills[i]}`)
        // }
        for(const skill of this.skills){
            console.log(`${this.name} knows ${skill}`)
        }
    }
}

developer.showSkills()

/*
rajesh knows js
rajesh knows node
rajesh knows react
rajesh knows py
*/
