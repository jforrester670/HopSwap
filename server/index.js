const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/:user/beerlist', function (req, res) {
  const user = req.params.user;

  db.getUserList(user, function(err, data) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/api/:searchTerm/:value/search', function (req, res) {
  const searchTerm = req.params.searchTerm;
  const value = req.params.value;
  let searchList = [];

  axios.get(`https://api.punkapi.com/v2/beers?${searchTerm}=${value}`)
    .then((results) => {
      console.log(`https://api.punkapi.com/v2/beers?${searchTerm}=${value}`);
      results.data.map((listEntry => {
        searchList.push({
          name: listEntry.name,
          description: listEntry.description,
          image_url: listEntry.image_url,
          abv: listEntry.abv,
          ibu: listEntry.ibu,
          food_pairing: listEntry.food_pairing,
        });
      }))
      res.send(searchList);
    })
    .catch((err) => {
      console.log(err);
    });

});

app.post('/api/:user/add', function(req, res) {
  const user = req.params.user;
  const beer = req.body;

  db.addToList(user, beer, function(err, success) {
    if (err) { res.send(err); }
    res.status(201);
    res.end();
  });
})


app.listen(port, () => console.log(`listening on port ${port}!`));
