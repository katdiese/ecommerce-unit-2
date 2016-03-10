var express = require('express');
var router = express.Router();
var queries = require('../queries/checkout-queries');

router.get('/', function(req, res, next) {
  
  queries.populateReceipt(1)
  
  .then( function (result) {
    console.log(result);  
      res.render('checkout', 
        {
          title: 'Checkout Page',
          purchase : result 
        }
      );
    }  
  )

  .catch( function ( err ) { return err; }); 
  
})

module.exports = router;
