// function anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let obj1 = {};
//   let obj2 = {};
//   for (const elem of str1) {
//     obj1[elem] = (obj1[elem] || 0) + 1;
//   }
//   for (const elem of str2) {
//     obj2[elem] = (obj2[elem] || 0) + 1;
//   }
//   console.log(obj1, obj2);
//   for (const key of Object.keys(obj1)) {
//     if (!(key in obj1)) {
//       return false;
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(anagram("cat", "atc"));
// 1-Understand the problem
// s-1 Determine if the strings are the anagram of each other
// s-2  string
// s-3 Yes, i have the enough info
// func anagram,str1,str2
// 2-Explore concrete examples
// ("", ""), ("", "abc"), ("cat", "rat"), ("a", "abc");
// 3-Break it down
// if lengths are not same return false
// collect the frequencies of the values of the strings
// check if the char in str1 exists in str2 then
// compare the frequencies of each element if not same return false

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};
  for (let val of str1) {
    obj1[val] = ++obj1[val] || 1;
  }
  for (let val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for (const key of Object.keys(obj1)) {
    if (!(key in obj1)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(anagram("cat", "tac"));
