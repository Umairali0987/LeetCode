function collectOdds(arr) {
  let results = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      results.push(helperInput[0]);
    }
    helper(helperInput.splice(1));
  }
  helper(arr);
  return results;
}
console.log(collectOdds([9, 2, 21, 2, 1, 2, 3, 12, 15]));
