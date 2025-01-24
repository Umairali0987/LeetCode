let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(1, 0, 0, 9, 8);
// console.log(array);

// 1-understand the problem
// s-1 compare array with the square of the other array with the same frequencies of them
// s-2 both can be empty or both can have different length
// s-3 true or false
// s-4 arr1,arr2, function same
// 2-Explore Examples
// [1,2,3] [1,4,9]
// [1,2,3] [1,2]
// [1,2,3,1] [1,4,9]
// Write about the steps you need to take to solve the problem
// s-1 If the length is not same then return false
// s-2 Check whether the square of the element exists in the other array
// s-3 If exists then remove it form the array to remember
// s-4 Else return false
// s-5 If every element have square of it then return true
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const elem of arr1) {
    console.log(123);
    const indexes = arr2.indexOf(elem ** 2);
    if (indexes > -1) {
      arr2.splice(indexes, 1);
      console.log(arr2);
    } else {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2,3,1], [1, 4, 9,1]));
