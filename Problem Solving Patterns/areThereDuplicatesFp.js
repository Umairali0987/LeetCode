// Write a function called areThereDuplicates that accepts a variable number of arguments
// and determines if there are any duplicates among the provided arguments. The function
// should return true if there are duplicates and false otherwise.
function areThereDuplicates(...arr) {
  console.log(arr);
  const obj = {};
  for (const elem of arr) {
    obj[elem] = (obj[elem] || 0) + 1;
  }
  for (const key of Object.keys(obj)) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3, "hello", 3));
areThereDuplicates(1, 2, 3, "hello");
