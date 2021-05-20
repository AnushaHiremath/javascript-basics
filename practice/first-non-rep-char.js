function nonRepeatedChar(str){
  var str='abcd'
  for(let i=0;i<str.length;i++){
      if(str.indexOf(str.charAt(i))==str.lastIndexOf(str.charAt(i))){
          console.log(str.charAt(i))
          break;
      }
  }
}

console.log(nonRepeatedChar('abbacsd'))