const express = require('express');

const routes = express();

const CartController = require('./controllers/Cart_GSE_52/Cart_GSE_52');
const checkOutController = require('./controllers/Checkout_GSE_52/Checkout_GSE_52');

routes.get('/cartGse52', CartController.show);
routes.post('/cartGse52', CartController.store);
routes.delete('/cartGse52/:sku', CartController.delete);
// routes.get('/inventoryGse52', InventoryContrroller.show);
routes.post('/cartGse52/checkout', checkOutController.store);
routes.get('/inventoryGse52', checkOutController.show);

module.exports = routes;
