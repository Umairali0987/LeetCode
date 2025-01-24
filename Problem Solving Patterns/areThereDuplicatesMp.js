function areThereDuplicates(...arr) {
  let start = 0;
  let next = 1;
  const sortedArr = arr.sort((a, b) => a - b);
  while (next < arr.length) {
    console.log(arr[start], arr[next]);
    if (arr[start] === arr[next]) {
      return true;
    }
    start++;
    next++;
  }

  return false;
}
console.log(areThereDuplicates(1, 3, 2, 3));
