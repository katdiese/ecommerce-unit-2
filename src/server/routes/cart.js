var express = require('express');
var router = express.Router();
var queries = require('../queries/cart-queries');

router.get('/', function(req, res, next) {
  
  var promises = [];
  
  promises.push(queries.getCart(req.user.id));
  
  promises.push(queries.getGrandTotal(req.user.id));
  
  Promise.all(promises)
  
  .then(function(data) {
    res.render('cart', {
      cart: data[0].rows,
      grandTotal: data[1].rows
    })
  })
  .catch( function ( err ) { return err; });

})

module.exports = router;