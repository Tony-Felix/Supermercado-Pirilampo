const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let totalStock = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    totalStock += stockProducts[index].quantityInStock;
  }
  return totalStock;
};

module.exports = { getProductsAmount };
