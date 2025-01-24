function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
  for (const elem of str1) {
    lookup[elem] = (lookup[elem] || 0) + 1;
  }
  console.log(lookup);
  for (const letter of Object.keys(lookup)) {
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter]--;
      console.log(lookup[letter]);
    }
  }
  return true;
}
console.log(anagram("cat", "atc"));
