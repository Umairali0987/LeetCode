// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       let sum = nums[i] + nums[j];
//       if (sum === target) {
//         return [i, j];
//       }
//     }
//   }
// };
var twoSum = function (nums, target) {
  let objMem = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    let x = target - cur;
    if (x in objMem) {
      return [objMem[x], i];
    }
    objMem[nums[i]] = i;
  }
};


