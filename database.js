const knex = require('knex');
const knexConfig = require('./src/knexfile');

const db = knex(knexConfig[process.env.NODE_ENV]);

module.exports = db;