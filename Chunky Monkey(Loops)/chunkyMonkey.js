function chunkArrayInGroups(arr, size) {
  const chunkedArray = []; // Initialize an empty array to store the chunks
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    chunkedArray.push(chunk);
  }

  return chunkedArray;
}
