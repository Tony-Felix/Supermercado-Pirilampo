const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  const stockOff = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      stockOff.push(stockProducts[index].productName);
    }
  }
  return stockOff;
};

module.exports = { getOutOfStockProducts };
