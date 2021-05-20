function sumPos(a,b){
    let count=0
    for (i = 0; i < a.length; i++){
       console.log(a[i],b)
        if (a[i]== b) {
            console.log(a[i])
            count ++
        }
    }
    return count;
}

//var anArray = [1, -4, 7, 12];

console.log(sumPos('Hello','o'));