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
  axios.get()
})

app.listen(port, () => console.log(`listening on port ${port}!`));
