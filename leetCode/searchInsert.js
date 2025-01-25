var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let pivot = 0;
  while (left <= right) {
    pivot = Math.round((left + right) / 2);
    if (nums[pivot] === target) {
      return pivot;
    } else if (nums[pivot] < target) {
      left = ++pivot;
    } else {
      right = --pivot;
    }
  }
  return left;
};
console.log(searchInsert([1, 3, 5, 6], 4));
