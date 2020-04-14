import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/users', (req, res) => res.json([
  { "id": 1, "firstName": "Axl", "lastName": "Rose", "email": "axl@gnr.com"},
  { "id": 2, "firstName": "Slash", "lastName": "Rose", "email": "slash@gnr.com"},
  { "id": 3, "firstName": "Duff", "lastName": "Rose", "email": "duff@gnr.com"},
]));

app.listen(port, err => err ? console.log(err) : open(`http://localhost:${port}`));
