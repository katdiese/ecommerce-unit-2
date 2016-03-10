var knex = require('../../../db/knex');


module.exports = {

  populateReceipt: function (userID) {

    return knex('shopping_carts').innerJoin('animals', 'animals.id', 'shopping_carts.animal_id').where('shopping_carts.user_id', userID);

  }


};