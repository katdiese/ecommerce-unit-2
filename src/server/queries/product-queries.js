var knex = require('../../../db/knex');


module.exports = {

  populateProducts: function () {
    
    return knex('animals').select();        
  
  }  
  
  
};