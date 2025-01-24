function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (const elem of arr1) {
    obj1[elem] = (obj1[elem] || 0) + 1;
  }
  for (const elem of arr2) {
    obj2[elem] = (obj2[elem] || 0) + 1;
  }
  console.log(obj1, obj2);
  for (const key of Object.keys(obj1)) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key ** 2]) {
      return false;
    }
  }
  return true;
}
console.log(same([1, 2, 3, 1,2], [1, 4, 9, 1,4]));

// Collects the content in the array
// Then compare that whether the square of the elem exist in the obj
// And also the element frequency is also the same
