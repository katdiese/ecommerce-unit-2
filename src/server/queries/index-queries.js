var knex = require('../../../db/knex');
function Carousel() {
  return knex('carousel_images');
}

module.exports = {
  getCarouselImages: function() {
    return Carousel().select()
  }
}