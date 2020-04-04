const knex = require("knex");
const configuration = require("../../knexfile");

// Escolhendo o tipo de configuração, nesse caso a de desenvolvimento.
const connection = knex(configuration.development);

module.exports = connection;
