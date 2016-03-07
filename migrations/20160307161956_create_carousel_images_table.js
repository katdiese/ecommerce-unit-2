
exports.up = function(knex, Promise) {
  return knex.schema.createTable('carousel_images', function(table){
    table.increments();
    table.text('image');   
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('carousel_images');
};
