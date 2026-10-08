function replaceVowels(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if ("aeiouy".includes(str[i].toLowerCase())) {
      result += "*";
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(replaceVowels("hello world"));
console.log(replaceVowels("Javascript"));

module.exports = replaceVowels;