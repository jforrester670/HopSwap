const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);

pool.connect();

console.log('connected to PG');

const getUserList = function(user, cb) {
  const userName = user;

  pool.query(`SELECT * FROM beerlist WHERE user_name = ${userName}`, (err, results) => {
    if(err) {
      cb(err, null);
    } else {
      console.log(results);
      cb(null, results);
    }
  });
};

module.exports = {
  getUserList,
};
