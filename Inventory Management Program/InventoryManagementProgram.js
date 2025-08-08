const inventory = [];

function findProductIndex(productName) {
  const lowerCase = productName.toLowerCase();
  if (inventory.length !== 0) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].name === lowerCase) {
        return i;
      }
    }
  }
  return -1;
}

function addProduct(productObj) {
  const existingProduct = findProductIndex(productObj["name"]);
  if (existingProduct === -1) {
    productObj.name = productObj.name.toLowerCase();
    inventory.push(productObj);
    console.log(`${productObj.name} added to inventory`);
  } else {
    inventory[existingProduct]["quantity"] += productObj.quantity;
    console.log(`${productObj.name.toLowerCase()} quantity updated`);
  }
}

function removeProduct(productName, quantity) {
  const toLower = productName.toLowerCase();
  const productObj = inventory[findProductIndex(toLower)];
  if (findProductIndex(toLower) === -1) {
    console.log(`${toLower} not found`);
  } else if (productObj.quantity < quantity) {
    console.log(
      `Not enough ${toLower} available, remaining pieces: ${productObj.quantity}`
    );
  } else {
    if (productObj.quantity === quantity) {
      inventory.splice(findProductIndex(toLower), 1);
    } else {
      productObj.quantity -= quantity;
      console.log(`Remaining ${toLower} pieces: ${productObj.quantity}`);
    }
  }
}
