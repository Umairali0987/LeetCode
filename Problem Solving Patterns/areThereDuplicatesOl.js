function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates(1, 2, 1, 2, 3, 4, "hello"));
