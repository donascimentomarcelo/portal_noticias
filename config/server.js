const express = require('express'),
      consign = require('consign'),
      bodyParser = require('body-parser'),
      multiparty = require('connect-multiparty'),
      expressValidator = require('express-validator');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(multiparty());

consign()
    .include('app/routes')
    .then('config/db_connection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;