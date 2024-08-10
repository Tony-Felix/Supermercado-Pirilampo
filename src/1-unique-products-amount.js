const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  let quantProdutos;
  for (let index = 0; index <= stockProducts.length; index += 1) {
    quantProdutos = index;
  }
  return quantProdutos;
};

module.exports = { getUniqueProductsAmount };
