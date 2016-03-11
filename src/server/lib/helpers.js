var bcrypt = require('bcrypt');

function ensureAuthenticated(req, res, next) {
  if(!req.user) {
    return res.redirect('/login');
  } else {
    next();
  }
  //check if user is authenticated
    //if not -> redirect to login
    //if so -> call next()
}

function loginRedirect(req, res, next) {
  if(req.user) {
    return res.redirect('/');
  } else {
    next();
  }
  //check if user is authenticated
    //if not -> call next()
    //if so -> redirect to main route
}

function hashing(password) {
  return bcrypt.hashSync(password, 10);
  //Add promises!
  // var newPassword;
  // bcrypt.hash(password, 10, function(err, hash) {
  //   if(err) {
  //     return 'Something bad happened';
  //   } else {
  //     newPassword = hash;
  //   }
  // });
  // return newPassword;
}

function comparePassword(password, hashedpassword) {
  return bcrypt.compareSync(password, hashedpassword);
}


module.exports = {
  ensureAuthenticated: ensureAuthenticated,
  loginRedirect: loginRedirect,
  hashing: hashing,
  comparePassword: comparePassword
}