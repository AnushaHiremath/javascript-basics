function sumOfDigits(num){
    let sum = 0;
   
    if(Number.isInteger(num) === false){
      return sum;
    }
    
    let str = num.toString(); 
    for(let i = 0; i <= str.length - 1; i++){
      sum += +str[i];
    }
    
    return sum;
  }

  console.log(sumOfDigits())
  console.log(sumOfDigits(41))
  console.log(sumOfDigits(2913))
  

  