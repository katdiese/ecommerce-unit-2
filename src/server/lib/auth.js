var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var helpers = require('./helpers');

var knex = require('../../../db/knex');


passport.use(new LocalStrategy({
  usernameField: 'username'
}, function(username, password, done) {
  console.log(username);
    // does the email exist?
    knex('users').where('username', username)
    .then(function(data) {
      console.log(data);
      // email does not exist. return error.
      if (!data.length) {
        return done('Incorrect username.');
      }
      var user = data[0];
      console.log(user);
      // email found but do the passwords match?
      if (helpers.comparePassword(password, user.password)) {
        // passwords match! return user
        return done(null, user);
      } else {
        // passwords don't match! return error
        return done('Incorrect password.');
      }
    })
    .catch(function(err) {
      // issue with SQL/nex query
      return done('Incorrect email and/or password.');
    });
  }
));

// sets the user to 'req.user' and establishes a session via a cookie
passport.serializeUser(function(user, done) {
  // console.log(user);
  done(null, user.id);
});

// used on subsequent requests to update 'req.user' and updates session
passport.deserializeUser(function(id, done) {
  knex('users').where('id', id)
  .then(function(data) {
    return done(null, data[0]);
  })
  .catch(function(err) {
    return done(err);
  });
});


module.exports = passport;