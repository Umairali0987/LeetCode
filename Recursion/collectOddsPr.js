function collectOdds(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOdds(arr.splice(1)));

  return newArr;
}

console.log(collectOdds([9, 2, 21, 2, 1, 2, 3, 12, 15]));
