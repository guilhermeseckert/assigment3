// eslint-disable-next-line import/no-mutable-exports
let database = require('../../database.json');

module.exports = {
  async store(request, response) {
    const cartcheckout = request.body;

    const temp = [];
    temp.push(cartcheckout);

    temp.forEach((element) => {
      const product = database.find((products) => products.sku === element.sku);
      const updateQuantity = product.quantity - element.quantity;
      database = database.map((item) => (item.sku === element.sku
        ? { ...item, quantity: updateQuantity } : item));
    });

    response.json(database);
  },

  async show(request, response) {
    return response.json(database);
  },

};
