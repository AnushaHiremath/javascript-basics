const players =['dhoni','virat','sachin']

//for - initialization, consition, increment/decrement 
//es5 feature
for(let i=0;i<players.length;i++){
    console.log(players[i])
}

//forEach - internally access all the elements in an array
//es6 feature
//function used in side the method forEach, is called a callback function
players.forEach(function(ele){
    console.log(ele)
})

//es6 for of - string, array
for(const ele of players){
    console.log(ele)
}

//for in - objects
