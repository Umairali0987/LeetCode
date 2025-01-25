var removeDuplicates = function (nums) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in seen) {
      nums.splice(i, 1);
      i--;
    } else {
      seen[nums[i]] = i;
    }
    console.log(nums, seen);
  }
  return nums.length;
};
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
