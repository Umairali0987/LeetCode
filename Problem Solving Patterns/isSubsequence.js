// Write a function called isSubsequence that takes in two strings, str1 and str2,
// and determines whether the characters in str1 appear sequentially in str2.
// The characters in str1 must appear in the same order within str2, but they
// do not need to be contiguous.
function isSubsequence(str1, str2) {
  if (!str1.length) {
    return true;
  }
  let i = 0;
  let j = 0;
  while (i < str1.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }
  console.log(i);
  if (i === str1.length) {
    return true;
  } else {
    return false;
  }
}
console.log(isSubsequence("abc", "ahbcd"));
