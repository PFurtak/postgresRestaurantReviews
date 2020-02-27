const host = 'localhost',
  database = 'restaurantv2',


const options = {
  host: host,
  database: database,

};

const pgp = require('pg-promise')({
  query: function(e) {
    console.log('QUERY:', e.query);
  }
});

const db = pgp(options);

module.exports = db;
