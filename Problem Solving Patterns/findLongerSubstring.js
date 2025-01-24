// Write a function called findLongestSubstring that takes a
// string as input and determines the length of the longest
// substring with all distinct characters.

// function findLongerSubstring(str) {
//   let longest = 0;
//   for (i = 0; i < str.length; i++) {
//     let subString = str[i];
//     for (j = i + 1; j < str.length; j++) {
//       subString = subString + str[j];
//       let uniqueSubString = new Set(subString);
//       console.log(subString.length, uniqueSubString.size, longest);
//       console.log(uniqueSubString.size, subString.length, longest);
//       if (uniqueSubString.size === subString.length) {
//         longest = Math.max(longest, subString.length);
//       }
//     }
//   }
//   return longest;
// }
// console.log(findLongerSubstring("b"));

function findLongestSubstring(str) {
  if (!str) return 0; // Handle edge case for empty string

  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    let seen = new Set(); // To track characters in the current substring
    let currentLength = 0;

    for (let j = i; j < str.length; j++) {
      if (seen.has(str[j])) {
        break; // Stop if a duplicate character is found
      }
      console.log(seen);
      seen.add(str[j]); // Add character to the set
      currentLength++;
      maxLength = Math.max(maxLength, currentLength); // Update maxLength
    }
  }

  return maxLength;
}
console.log(findLongestSubstring("ba"));
