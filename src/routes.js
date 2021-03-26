const express = require('express');

const routes = express();

const CartController = require('./controllers/Cart_GSE_52/Cart_GSE_52');
const CheckOutController = require('./controllers/Checkout_GSE_52/Checkout_GSE_52');
const InventoryController = require('./controllers/GetInventory_GSE_52/GetInventory_GSE_52');

routes.get('/cartGse52', CartController.show);
routes.post('/cartGse52', CartController.store);
routes.delete('/cartGse52/:sku', CartController.delete);
routes.post('/cartGse52/checkout', CheckOutController.store);
routes.get('/inventoryGse52', InventoryController.show);

module.exports = routes;
