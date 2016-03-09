var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'order_details',
  file: 'data/order_details.csv'
});
