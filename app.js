const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');

const app = express();

app.use(bodyParser.json());

app.use(routes);

module.exports = app;
