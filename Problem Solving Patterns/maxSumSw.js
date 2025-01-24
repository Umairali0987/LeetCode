function maxSum(arr, num) {
  let tempSum = 0;
  let maxSum = 0;
  for (i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }
  tempSum = maxSum;
  for (i = num; i < arr.length; i++) {
    console.log(tempSum, maxSum);
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
console.log(maxSum([1, 2, 8, 2, 8, 1, 5], 2));
