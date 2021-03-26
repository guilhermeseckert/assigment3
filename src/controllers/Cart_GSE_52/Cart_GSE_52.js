const database = require('../../fakeDatabase');

module.exports = {

  async show(request, response) {
    return response.json(database.cart);
  },

  async store(request, response) {
    const {
      name, price, sku,
    } = request.body;

    const addedItemExists = database.cart.some((item) => item.sku === sku);
    const product = {
      sku,
      name,
      quantity: 1,
      price,
    };

    if (addedItemExists) {
      database.cart = database.cart.map((item) => (

        item.sku === sku
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      database.cart.push(product);
    }

    response.json(database.cart);
  },

  async delete(request, response) {
    const { sku } = request.params;
    const { quantity } = request.body;

    const addedItemExists = database.cart.some((item) => item.sku === sku);

    if (quantity === 1) {
      database.cart = database.cart.filter((product) => product.sku !== sku);
    }

    if (addedItemExists) {
      database.cart = database.cart.map((item) => (

        item.sku === sku
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    }

    response.send(database.cart);
  },

};
