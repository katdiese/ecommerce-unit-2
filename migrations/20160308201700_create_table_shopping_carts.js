
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping_carts', function(table){
    table.increments();
    table.string('user_id').references('users', 'id');;
    table.string('animal_id').references('animals', 'id');;
    table.decimal('price');
    table.integer('quantity')  
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shopping_carts');
};
