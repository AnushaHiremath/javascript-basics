const arr = [[1,2],[8,11]]
function printArray(arr){
    for(let i=0;i<arr.length;i++){
        console.log('row',i)
        for(let j=0;j<arr.length;j++){
            console.log(arr[i][j])
        }
    }
    return arr
}

console.log(printArray(arr))

 

//for Each
function printA(arr){
    arr.foreach(function(ele,i){
        console.log('row',i)
        ele.foreach(function(n){
            console.log(n)
        })
    })
}