var express = require('express');
var router = express.Router();
var queries = require('../queries/cart-queries');

router.get('/', function(req, res, next) {
  queries.getCart(3)
  .then(function(data) {
    res.render('cart', {
      cart: data
    })
  })
  .catch( function ( err ) { return err; });

})

module.exports = router;