function every(a,b){
    for (let i = 0; i < a.length; i++){
        if (b(a[i]) != true) {
            return false
        }
    }
    return true
}

console.log(every([1, 2, 3, 4, 5], function (val) { return val > 0; }))
console.log(every([1, 2, 3, 4, 5], function (val) { return val < 2; }))
