exports.up = function (knex) {
  // Cirando uma tabela com o nome "ongs".
  return knex.schema.createTable("ongs", function (table) {
    // Criando os campos da tabela "ongs".
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function (knex) {
  // Caso algo de errado, o método down server para desfazer a migration criada.
  return knex.schema.dropTable("ongs");
};
