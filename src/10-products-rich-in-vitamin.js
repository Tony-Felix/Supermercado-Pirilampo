const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const arrayDeObjeto = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].vitaminsInformation) {
      let objeto = { description: stockProducts[index].description };
      objeto.formattedPrice = `R$ ${stockProducts[index].price}`;
      let temp = stockProducts[index].vitaminsInformation;
      objeto.vitaminsInformation = `Pode conter: ${temp.join('-')}`;
      arrayDeObjeto.push(objeto);
    }
  }
  return arrayDeObjeto;
};

module.exports = { getProductsRichInVitamin };
