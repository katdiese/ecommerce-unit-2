var express = require('express');
var router = express.Router();
var pg = require('pg');
var queryString = require('query-string');
var knex = require('../../../db/knex');
var queries = require("../queries/product-queries");

// Show a single restaurant
router.get('/', function(req, res, next) {
  
  queries.populateProducts()
  
  .then( function (result) { 

    res.render('products', 
      { 
        products: result,
      }
    );
  
  })
  
  .catch( function ( errors ) { 
    return next(errors); 
  });
  
});

module.exports = router;