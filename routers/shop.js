const express = require('express');

const adminData = require('./admin');

const route = express.Router();

route.get('/',(req, res,next) => {
  const products = adminData.products;
  res.render('shop.ejs', { prods: products, pageTitle: 'Shop', path: '/shop' });
});

module.exports = route;