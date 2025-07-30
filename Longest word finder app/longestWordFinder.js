function findLongestWordLength(str) {
  const newArr = str.split(" "); // 9 elements\
  let longestWord = 0;
for(let i = 0; i < newArr.length ; i++) {
const word = newArr[i].length;
if (word > longestWord) {
longestWord = word;
}
}
return longestWord;
}