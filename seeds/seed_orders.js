var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'orders',
  file: 'data/orders.csv'
});
