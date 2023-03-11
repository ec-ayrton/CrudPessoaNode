exports.up = function (knex) {
    return knex.schema.createTable('produto', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable().unique();
        table.string('descricao').notNullable();
        table.decimal('preco').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('produto');
};