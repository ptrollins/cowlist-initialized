const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('./client/dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/cows', (req, res) => {
  res.setStatus(200).send(results);
});

app.post('/api/cows', (req, res) => {
  res.sendStatus(201);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
