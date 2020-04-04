exports.up = function (knex) {
  return knex.schema.createTable("incidents", function (table) {
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();
    table.string("ong_id").notNullable();

    // A coluna "ong_id" referencia a coluna "id" dentro da tabela "ongs".
    table.foreign("ong_id").references("id").inTable("ongs");
  });
};

exports.down = function (knex) {
  return knex.schema.droTable("incidents");
};
