const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const arrayDeObjeto = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance) {
      let objeto = { description: stockProducts[index].description };
      objeto.formattedPrice = `R$ ${stockProducts[index].price}`;
      let temp = stockProducts[index].allergyOrIntolerance;
      objeto.allergyOrIntoleranceMessage = `Pode conter: ${temp.join(' ')}`;
      arrayDeObjeto.push(objeto);
    }
  }
  return arrayDeObjeto;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
