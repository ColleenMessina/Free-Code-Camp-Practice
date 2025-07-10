const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  const removedEl = arr.pop();
  if (arr.length !== 0) {
    console.log(`${removedEl} removed from the end of the lunch menu.`);
    return arr;
  } else {
    console.log("No lunches to remove.");
    return arr;
  }
}
function removeFirstLunch(arr) {
  const firstElRemove = arr.shift();
  if (arr.length !== 0) {
    console.log(`${firstElRemove} removed from the start of the lunch menu.`);
    return arr;
  } else {
    console.log("No lunches to remove.");
    return arr;
  }
}

function getRandomLunch(arr) {
  const randomLunch = Math.floor(Math.random() * arr.length);
  if (arr.length !== 0) {
    console.log(`Randomly selected lunch: ${arr[randomLunch]}`);
  } else {
    console.log("No lunches available.");
  }
}
function showLunchMenu(arr) {
  if (arr.length !== 0) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}
