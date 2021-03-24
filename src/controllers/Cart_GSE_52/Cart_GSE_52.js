let cart = require('../../cart');

module.exports = {

  async show(request, response) {
    return response.json(cart);
  },

  async store(request, response) {
    const {
      name, price, sku,
    } = request.body;

    const addedItemExists = cart.some((item) => item.sku === sku);
    const product = {
      sku,
      name,
      quantity: 1,
      price,
    };

    if (addedItemExists) {
      cart = cart.map((item) => (

        item.sku === sku
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      cart.push(product);
    }

    response.json(cart);
  },

  async delete(request, response) {
    const { sku } = request.params;
    const { quantity } = request.body;

    const addedItemExists = cart.some((item) => item.sku === sku);

    if (quantity === 1) {
      cart = cart.filter((product) => product.sku !== sku);
    }

    if (addedItemExists) {
      cart = cart.map((item) => (

        item.sku === sku
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    }

    response.send(cart);
  },

};
