//This is not the right one because it is starting from
//the next one where the substring match but what about
//the match of the immidate next of the matched string
//second

// function stringSearch(str, strCheck) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < strCheck.length; j++) {
//       if (strCheck[j] === str[i]) {
//         if (j === strCheck.length - 1) {
//           count++;
//           break;
//         }
//         i++;
//       } else {
//         break;
//       }
//     }
//   }
//   return count;
// }

function stringSearch(str, strCheck) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < strCheck.length; j++) {
      if (strCheck[j] !== str[i + j]) break;
      if (j === strCheck.length - 1) {
        count++;
      }
    }
  }
  return count;
}
console.log(stringSearch("hahahahahahahahahah", "hah")); // Expected: 9
console.log(stringSearch("hello world", "xyz")); // Expected: 0
console.log(stringSearch("hi", "hello")); // Expected: 0
console.log(stringSearch("test", "test")); // Expected: 1
console.log(stringSearch("aaaaaa", "aaa")); // Expected: 4
console.log(stringSearch("HelloHello", "hello")); // Expected: 0
console.log(stringSearch("HelloHello", "Hello")); // Expected: 2
console.log(stringSearch("random text", "")); // Expected: 0
console.log(stringSearch("", "text")); // Expected: 0
console.log(stringSearch("abcdabcd", "abc")); // Expected: 2
console.log(stringSearch("$$$%%$$$%%", "$$")); // Expected: 4
console.log(stringSearch("12345 123", "123")); // Expected: 2
