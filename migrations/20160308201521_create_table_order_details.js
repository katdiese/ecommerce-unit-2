
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order_details', function(table){
    table.increments();
    table.string('order_id').references('orders', 'id');;
    table.string('animal_id').references('animals', 'id');;
    table.decimal('price');
    table.integer('quantity')  
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order_details');
};
