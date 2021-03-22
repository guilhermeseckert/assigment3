// eslint-disable-next-line import/no-mutable-exports
let database = require('../../database.json');
// eslint-disable-next-line import/no-mutable-exports
let { cart } = require('../../cart');

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

    cart.forEach((teste) => {
      cart = cart.filter((product) => product.sku !== teste.sku);
    });

    response.json(database);
  },

  async show(request, response) {
    return response.json(database);
  },

};
