const express = require('express');
const bodyParser = require('body-parser');

const db = require('../db');
const cow = require('./models');

const app = express();
const port = 3000;

app.use(express.static('./client/dist'));
app.use(bodyParser.json());

//app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/cows', (req, res) => {
  console.log('get cows: ');
  cow
    .getCows()
    .then((cows) => {
      console.log('get cow success');
      res.status(200).send(cows);
    })
    .catch((err) => {
      console.log('getCows: ', err);
      res.sendStatus(500);
    });
});

app.post('/api/cows', (req, res) => {
  console.log('post cows: ', req.body);
  cow
    .saveCows(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('getCows: ', err);
      res.sendStatus(500);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
