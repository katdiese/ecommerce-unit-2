var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'animals',
  file: 'data/animals.csv'
});
