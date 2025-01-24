function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    //This is a fail safe condition so that the elem at same index could not be subtracted
    console.log(arr[left], arr[right]);
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-4, -3, -2, 1, 0, 1, 2, 3, 5]));
