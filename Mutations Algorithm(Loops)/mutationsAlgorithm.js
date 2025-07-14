function mutation(arr) {
  const str1LowerCase = arr[0].toLowerCase();
  const str2LowerCase = arr[1].toLowerCase();

  for (let i = 0; i < str2LowerCase.length; i++) {
    const char = str2LowerCase[i];
    if (!str1LowerCase.includes(char)) {
      return false; 
    }
  }
  return true; 
}