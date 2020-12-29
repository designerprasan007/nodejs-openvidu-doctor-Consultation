const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
var session = require('express-session');
const bodyParser = require('body-parser');
const http = require('http');
const router = require('./src/router');
const UserRouter = require('./src/User');
const multer = require('multer');
// const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// opentok settings

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/nm', express.static('node_modules/material-components-web/dist'));
app.use('/nm1', express.static('node_modules/jquery/dist'));


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


app.use(router);
app.use(UserRouter);

module.exports = app;

