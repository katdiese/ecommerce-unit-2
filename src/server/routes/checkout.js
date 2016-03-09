var express = require('express');
var router = express.Router();
var queries = require('../queries/checkout-queries');

router.get('/', function(req, res, next) {
  res.render('checkout', {
      title: 'Checkout Page'
      });
})

module.exports = router;
