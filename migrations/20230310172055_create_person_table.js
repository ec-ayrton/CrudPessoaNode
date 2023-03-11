exports.up = function (knex) {
    return knex.schema.createTable('pessoa', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('cpf').unique().notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('pessoa');
};