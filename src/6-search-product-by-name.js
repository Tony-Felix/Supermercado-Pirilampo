const stockProducts = require('./data.json');

const searchProductByName = (name) => {
  if (arguments.length === 0) {
    return null;
  }
  let newObject = {};
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (name === stockProducts[index].productName) {
      newObject.description = stockProducts[index].description;
      newObject.formattedPrice = `R$ ${stockProducts[index].price}`;
    }
  }
  if (Object.keys(newObject).length === 0) {
    return null;
  }
  return newObject;
};

module.exports = { searchProductByName };
