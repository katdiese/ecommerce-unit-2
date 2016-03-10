var knex = require('../../../db/knex');

function Cart() {
  return knex('shopping_carts');
}

module.exports = {
  getCart: function(userID) {
    return Cart().join('animals', 'animals.id', '=', 'shopping_carts.animal_id').select('shopping_carts.price', 'shopping_carts.quantity', 'animals.name', 'animals.image').where('user_id', userID);
  }
}