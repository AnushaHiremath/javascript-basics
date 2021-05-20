function removeEle(arr,name){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==name){
            arr.splice(i,1)
            break
        }
    }
    return arr
}

console.log(removeEle(['apple','mango','berry','kiwi'],'mango'))