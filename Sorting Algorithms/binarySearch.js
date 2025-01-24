// This is my solution
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);
    console.log(left, right);
    if (arr[pivot] === val) {
      return pivot;
    } else if (arr[pivot] < val) {
      left = ++pivot;
    } else {
      right = --pivot;
    }
  }
  return -1;
}
console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 19));
console.log(binarySearch([2, 5, 6, 9, 13, 14, 15, 28, 30], 14));
// This is other solution
// function binarySearch(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;
//   let pivot = Math.round((left + right) / 2);
//   while (arr[pivot] !== right && left <= right) {
//     console.log(pivot, arr[pivot]);
//     if (arr[pivot] < val) {
//       left = ++pivot;
//     } else {
//       right = --pivot;
//     }
//     pivot = Math.round((left + right) / 2);
//   }
//   if (arr[pivot] === val) {
//     return pivot;
//   } else {
//     return -1;
//   }
// }
// console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 19));
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5));
