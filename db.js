const knexConfig = require('./knexfile.js'); //bring development object here in knexConfig ... which is exported from knexfile.js
const knex = require('knex');
const db = knex(knexConfig.development);

module.exports = db;