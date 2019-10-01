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

const addToList = function(user, beer, cb) {
  const userName = user;
  const name = beer.name;
  const description = beer.description;
  const url = beer.image_url;
  const abv = beer.abv;
  const ibu = beer.ibu;
  const query = {
    text: 'INSERT INTO beerlist (user_name, name, description, image_url, abv, ibu) VALUES ($1, $2, $3, $4, $5, $6)',
    values: [userName, name, description, url, abv, ibu],
  };

  pool.query(query, (err, success) => {
    if (err) { cb(err, null); }
    cb(null, success);
  })
}

const deleteFromList = function(beer_id, cb) {
  const id = beer_id;

  pool.query(`DELETE FROM beerlist WHERE id = ${id}`, (error, success) => {
    if (error) { cb(error, null); }
    cb(null, success);
  });
};

module.exports = {
  getUserList, addToList, deleteFromList,
};
