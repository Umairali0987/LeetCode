function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([0, 9, 8, 1, 2, 3], 2));
