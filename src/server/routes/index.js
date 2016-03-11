var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');
var queries = require('../queries/index-queries');

router.get('/', helpers.ensureAuthenticated, function(req, res, next) {
  queries.getCarouselImages()
  .then(function(data) {
    res.render('index', {
      title: 'Sluggish Sidekicks',
      images: data
      });
  })
});

router.get('/login', helpers.loginRedirect, function(req, res, next) {
  res.render('login');
})

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) {
      return next(err);
    } else {
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  })(req, res, next);
});

router.get('/register', helpers.loginRedirect, function(req, res, next) {
  res.render('register');
});

router.post('/register', function(req, res, next) {
  var newUser = req.body;
  var hash = helpers.hashing(newUser.password);
  queries.checkIfUserExists(newUser.username)
  .then(function(data) {
    if(data.length) {
      res.render('register', {
        message: 'This user already exists you stupidhead'
      })
    } else {
      return knex('users').insert({
      name : newUser.name,
      username : newUser.username,
      password : hash
})
      .then(function() {
        res.redirect('/');
      })
    }
  })
})

router.get('/logout', helpers.ensureAuthenticated, function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.get('/home', function(req, res, next) {
  res.redirect('/');
});

router.get('/admin/', function(req, res, next) { 
  if (req.user.admin) {
    res.render('admin');
  } else {
    res.redirect('/');
  }
});

router.post('/admin', function(req, res, next) {
  queries.addAnimal(req.body.name, req.body.age, req.body.gender, req.body.origin, req.body.image, req.body.price, req.body.species)
  
  .then( function () {  
    res.redirect('/products')
  })
  
  .catch( function () { res.render('admin', {message : 'That animal was no good'}) });
  
})


module.exports = router;
