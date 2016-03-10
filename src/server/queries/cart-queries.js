var knex = require('../../../db/knex');

function Cart() {
  return knex('shopping_carts');
}

module.exports = {
  getCart: function(userID) {
//     return Cart().join('animals', 'animals.id', '=', 'shopping_carts.animal_id').select('shopping_carts.price', 'shopping_carts.quantity', 'animals.name', 'animals.image').where('user_id', userID);
  
  return knex.raw('SELECT * FROM animals INNER JOIN (SELECT user_id, quantity, animal_id, (quantity * price) as total FROM shopping_carts) as temp ON (animals.id = temp.animal_id) WHERE user_id = 3;');

  },
  
  getGrandTotal: function(userID) {
    return knex.raw('SELECT SUM(total) from (SELECT (quantity * price) as total FROM shopping_carts WHERE user_id = ' + userID + ') as t');
  }
}