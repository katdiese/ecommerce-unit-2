var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'shopping_carts',
  file: 'data/shopping_carts.csv'
});
