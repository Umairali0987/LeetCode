// Write a function called averagePair that accepts a sorted array of integers
// and a target average. The function should determine if there is a pair of
// numbers in the array whose average equals the target average.

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  if (!arr.length) {
    return false;
  }
  while (left < right) {
    console.log(arr[left], arr[right]);
    let avgCalc = (arr[left] + arr[right]) / 2;
    if (avgCalc === avg) {
      return [arr[left], arr[right]];
    }
    if (avgCalc > avg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
console.log(averagePair([-5, -3, -1, 0, 1, 3, 5], 0));
