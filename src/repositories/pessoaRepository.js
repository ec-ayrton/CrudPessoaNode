const knex = require('../../database');

module.exports = {
    async create(pessoa) {
        const pessoaCadastrada = await knex('pessoa').insert(pessoa).returning(['id', 'nome']);
        return pessoaCadastrada;
    },

    async findById(id) {
        const pessoa = await knex('pessoa').where({ id }).first();
        return pessoa;
    },

    async findAll() {
        const pessoas = await knex('pessoa').select('*');
        return pessoas;
    },

    async update(id, pessoa) {
        const rowsUpdated = await knex('pessoa').where({ id }).update(pessoa);
        return rowsUpdated;
    },

    async delete(id) {
        const rowsDeleted = await knex('pessoa').where({ id }).del();
        return rowsDeleted;
    }
}
