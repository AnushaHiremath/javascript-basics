// function palindrome(str) {
//     let i = 0;
//     let j = str.length - 1;
//     while(i < j) {
//         if(str[i] == str[j]) {
//             i++; 
//             j--;
//         }
//         else {
//             return false;
//         }
//     }
//     return true;
// }

function palindrome (str) {
      if (str == str.split('').reverse().join(''))
        return true;
      else
        return false;
    }

console.log(palindrome('racecar'))