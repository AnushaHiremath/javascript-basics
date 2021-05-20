function fnIsLEssThan100_loop(arr){ 
    for(var i = 0 ; i < arr.length; i ++){ 
        if(arr[i] >= 100){ 
            return false; 
        } 
    } 
    return true; 
  } 
console.log(arr.includes([1, 2, 3, 4], 4))
console.log(arr.includes([1, 2, 3, 4], 14))
console.log(arr.includes([],14))
