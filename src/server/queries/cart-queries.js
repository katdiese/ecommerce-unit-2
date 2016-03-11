var knex = require('../../../db/knex');

function Cart() {
  return knex('shopping_carts');
}

module.exports = {
  getCart: function(userID) {

  return knex.raw('SELECT * FROM animals INNER JOIN (SELECT user_id, quantity, animal_id, (quantity * price) as total FROM shopping_carts) as temp ON (animals.id = temp.animal_id) WHERE user_id = ' + userID + ';');

  },

  getGrandTotal: function(userID) {
    return knex.raw('SELECT SUM(total) from (SELECT (quantity * price) as total FROM shopping_carts WHERE user_id = ' + userID + ') as t');
  }
}