function frankenSplice(arr1, arr2, index) {
  const copyFirstArr = arr2.slice();
  arr1.reverse();

  for (let i = 0; i < arr1.length; i++) {
    copyFirstArr.splice(index, 0, arr1[i]);
  }
  arr1.reverse();
  return copyFirstArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
