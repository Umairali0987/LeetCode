// Given an integer x, return true if x is a
// palindrome,and false otherwise.
var isPalindrome = function (x) {
  let arr = [];
  let strInt = String(x);
  for (let i = strInt.length - 1; i >= 0; i--) {
    console.log(i);
    arr.push(strInt[i]);
  }
  if (strInt === arr.join("")) {
    return true;
  }
  return false;
};
console.log(isPalindrome(8998));
