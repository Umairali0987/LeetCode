// Write a function called sameFrequency that accepts two positive integers as input.
// The function should determine if the two numbers have the same frequency of digits.
//  In other words, the function should check if the digits in both numbers occur the
// same number of times.

// 1-Understand the problem
// s-1 Compare the frequency of didgits in two positve integers return true if they are same otherwise false
// s-2 input would be positive integers
// s-3 output would be true or false
// s-4 func sameFrequency int1,int2
// 2-Explore concrete examples
// 123,321 21,291
// 3-break down
// First check the length if not same return false
// calculate the frequency of the of both the integer digits in objects
// Then compare if they exits in both and the frequency is same

function sameFrequency(int1, int2) {
  const intStr1 = int1.toString();
  const intStr2 = int2.toString();
  if (intStr1.length !== intStr2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (const elem of intStr1) {
    obj1[elem] = (obj1[elem] || 0) + 1;
  }
  for (const elem of intStr2) {
    obj2[elem] = (obj2[elem] || 0) + 1;
  }
  for (const key of Object.keys(obj1)) {
    // if (!(key in obj2)) {
    //   return false; no need to have it we know that above will check the existence as well the frequency
    // }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(123981, 231198));
