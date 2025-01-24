// Given an integer x, return true if x is a
// palindrome,and false otherwise.
// var isPalindrome = function (x) {
//   let arr = [];
//   let strInt = String(x);
//   for (let i = strInt.length - 1; i >= 0; i--) {
//     console.log(i);
//     arr.push(strInt[i]);
//   }
//   if (strInt === arr.join("")) {
//     return true;
//   }
//   return false;
// };
// console.log(isPalindrome(8998));

var isPalindrome = function (x) {
  let reverse = 0;
  let num = x;
  while (num > 0) {
    let numToAdd = num % 10;
    num = Math.floor(num / 10);
    reverse = reverse * 10 + numToAdd;
  }
  return reverse === x;
};

console.log(isPalindrome(-121));
// // without converting number to string
// num = 12;
// console.log(1 % 10);
// console.log(Math.round(1 / 10));

// console.log(0 * 10 + 1);
// reverse * 10 + mod;
