
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping_carts', function(table){
    table.increments();
    table.integer('user_id').references('users', 'id');
    table.integer('animal_id').references('animals', 'id');
    table.decimal('price');
    table.integer('quantity') ;
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shopping_carts');
};
