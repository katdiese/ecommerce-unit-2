
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function(table){
    table.increments();
    table.string('user_id').references('users', 'id');;
    table.string('order_date');  
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
