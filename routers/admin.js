const express = require('express');
const path = require('path');

const products = [];

const route = express.Router();

route.get('/add-product',(req,res,next) => {
  res.render('add-product.ejs', {pageTitle: 'Add Product', path: '/admin/add-product'})
});

route.post('/add-product',(req,res,next) => {
  products.push({title: req.body.title, link: req.body.link});
  res.redirect('/');
});

exports.route = route;
exports.products = products;
