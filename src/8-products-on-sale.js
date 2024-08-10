const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const arrayDeObjeto = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      let objeto = { description: stockProducts[index].description };
      objeto.formattedPrice = `R$ ${stockProducts[index].price}`;
      objeto.onSale = stockProducts[index].onSale;
      arrayDeObjeto.push(objeto);
    }
  }
  return arrayDeObjeto;
};

module.exports = { getProductsOnSale };
