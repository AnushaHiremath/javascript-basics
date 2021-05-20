function filterValues(values){
    const result=[]
    for(let i=0;i<values.length;i++){
        if(values[i]){
            result.push(values[i])
        }
    }
}

// const result = values.filter(function(ele){
//     return ele  
// })
// return result

console.log(filterValues([58,'','abcd',true,null,false,0]))