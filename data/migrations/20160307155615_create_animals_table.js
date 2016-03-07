
exports.up = function(knex, Promise) {
  return knex.schema.createTable('animals', function(table){
    table.increments();
    table.string('name');
    table.integer('age');
    table.string('gender');
    table.string('origin');
    table.text('image');
    table.decimal('price');
    table.string('species');   
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('animals');
};
