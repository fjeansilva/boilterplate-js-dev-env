const express = require('express');
const path = require('path');
const open = require('open');

var port = 80;
var app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.listen(port, err => err ? console.log(err) : open(`http://localhost:${port}`));
