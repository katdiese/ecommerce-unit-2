var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'carousel_images',
  file: 'data/carousel.csv'
});
