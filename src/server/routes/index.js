var express = require('express');
var router = express.Router();
var options = {

};
var pgp = require('pg-promise') (options);
var connectionString = process.env.DATABASE_URL || 'postgress://localhost:5432/animals';
var db = pgp(connectionString);

router.get('/', function(req, res, next) {
  db.any('SELECT * FROM carousel_images')
  .then(function(data) {
    console.log(data);
    res.render('index', {
      title: 'Express',
      images: data
      });
  })

});

module.exports = router;
