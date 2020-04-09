'use strict';
const mongoose = require('mongoose');
const config = require('./config');
const chalk = require('chalk');
mongoose.connect(config.url, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(chalk.redBright(err));
});

db.once('open', () => {
  console.log(chalk.white('connected to the mongodb'));
});

module.exports = db;
