var isPowerOfTwo = function (n) {
  if (n % 3 === 0) {
    return false;
  }
  if (n === 1) {
    return true;
  }

  return isPowerOfTwo(n / 2);
};
console.log(isPowerOfTwo(16));
