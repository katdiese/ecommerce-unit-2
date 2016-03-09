var express = require('express');
var router = express.Router();
var options = {

};
var pgp = require('pg-promise') (options);
var connectionString = process.env.DATABASE_URL || 'postgress://localhost:5432/animals';
var db = pgp(connectionString);
var queries = require('../queries/index-queries');

router.get('/', function(req, res, next) {
  queries.getCarouselImages()
  .then(function(data) {
    console.log(data);
    res.render('index', {
      title: 'Sluggish Sidekicks',
      images: data
      });
  })
});

router.get('/home', function(req, res, next) {
  res.redirect('/');
})


module.exports = router;
