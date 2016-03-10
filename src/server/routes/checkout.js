var express = require('express');
var router = express.Router();
var queries = require('../queries/cart-queries');

router.get('/', function(req, res, next) {

  // queries.populateReceipt(1)

  // .then( function (result) {
    // console.log(result);
      res.render('checkout',
        {
          title: 'Checkout Page'
          // purchase : result
        }
      );
  //   }
  // )

  // .catch( function ( err ) { return err; });

});

router.get('/charge', function(req, res, next) {
  res.render('charge');
});

router.post('/charge', function(req, res,next) {
    var stripeToken = req.body.stripeToken;
    var amount =  req.body.stripeAmount;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            res.send('error');
        } else {
            res.send('success');
        }
    });
});

module.exports = router;
