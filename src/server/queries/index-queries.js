var knex = require('../../../db/knex');
function Carousel() {
  return knex('carousel_images');
}

function Users() {
  return knex('users');
}

function Animals() {
  return knex('animals');
}

module.exports = {
  getCarouselImages: function() {
    return Carousel()
  },
  checkIfUserExists: function(username) {
    return Users().where('username', username)
  },
  addAnimal : function(name, age, gender, origin, image, price, species) {
    return Animals().insert({
      'name' : name,
      'age' : age,
      'gender' : gender,
      'origin' : origin,
      'image' : image,
      'price' : price,
      'species' : species     
    })
    
  }
}
