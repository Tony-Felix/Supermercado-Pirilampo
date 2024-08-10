const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const produtosEmBaixa = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      let temp1 = stockProducts[index].productName;
      let temp2 = stockProducts[index].quantityInStock;
      produtosEmBaixa.push(`${temp1}: ${temp2} unidades`);
    }
  }
  return produtosEmBaixa;
};
console.log(getLowStockProducts());
module.exports = { getLowStockProducts };
