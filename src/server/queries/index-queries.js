var knex = require('../../../db/knex');
function Carousel() {
  return knex('carousel_images');
}

function Users() {
  return knex('users');
}

module.exports = {
  getCarouselImages: function() {
    return Carousel()
  },
  checkIfUserExists: function(username) {
    return Users().where('username', username)
  }
}
