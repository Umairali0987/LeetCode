function maxSum(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (j = 0; j < num; j++) {
      temp = temp + arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSum([1, 2, 8, 2, 8, 1, 5], 2));
// It has time complexity of O(n)
