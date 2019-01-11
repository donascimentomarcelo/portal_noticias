const express = require('express'),
      consign = require('consign'),
      bodyParser = require('body-parser'),
      multiparty = require('connect-multiparty'),
      expressValidator = require('express-validator'),
      expressSession = require('express-session');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(multiparty());
app.use(expressSession({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false
}));

consign()
    .include('app/routes')
    .then('config/db_connection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;