const database = require('../../fakeDatabase');

module.exports = {
  async store(request, response) {
    const cartcheckout = request.body;
    const temp = [];
    temp.push(cartcheckout);

    temp.forEach((element) => {
      const product = database.data.find((products) => products.sku === element.sku);
      const updateQuantity = product.quantity - element.quantity;
      database.data = database.data.map((item) => (item.sku === element.sku
        ? { ...item, quantity: updateQuantity } : item));

      database.cart = database.cart.filter((cartProduct) => cartProduct.sku !== element.sku);
    });

    response.json(database.data);
  },

};
