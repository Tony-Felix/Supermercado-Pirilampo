const stockProducts = require('./data.json');

const searchProductsByBrand = (marca) => {
  let arrayVazio = [];
  if (arguments.length === 0) {
    return arrayVazio;
  }
  const arrayObjeto = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (marca === stockProducts[index].brand) {
      let objeto = { description: stockProducts[index].description };
      objeto.formattedPrice = `R$ ${stockProducts[index].price}`;
      arrayObjeto.push(objeto);
    }
  }
  if (Object.keys(arrayObjeto).length === 0) {
    return arrayVazio;
  }
  return arrayObjeto;
};

module.exports = { searchProductsByBrand };
