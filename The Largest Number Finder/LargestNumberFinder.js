function largestOfAll(arrOfArrs) {
  const newArr = [];
  for (let i = 0; i < arrOfArrs.length; i++) {
    const maxValue = Math.max(...arrOfArrs[i]);
    newArr.push(maxValue);
  }
  return newArr;
}
