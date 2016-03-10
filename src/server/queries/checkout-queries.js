var knex = require('../../../db/knex');


module.exports = {

  populateReceipt: function (userID) {

    return knex('shopping_carts').where('shopping_carts.user_id', userID);

  }


};