const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const expressRoutes = absoluteRequire('routes');
const { directory } = absoluteRequire('config');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(directory, 'public')));

expressRoutes(app);

module.exports = app;
