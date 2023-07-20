const express = require('express');
const procductController = require('../controllers/products');

const route = express.Router();

route.get('/add-product',procductController.getAddProduct);

route.post('/add-product', procductController.postAddProduct);

exports.route = route;
