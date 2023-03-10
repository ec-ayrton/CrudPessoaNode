const knex = require('../../database');

module.exports = {
    async create(pessoa) {
        const [id] = await knex('pessoas').insert(pessoa).returning('id');
        return id;
    },

    async findById(id) {
        const pessoa = await knex('pessoas').where({ id }).first();
        return pessoa;
    },

    async findAll() {
        const pessoas = await knex('pessoa').select('*');
        return pessoas;
    },

    async update(id, pessoa) {
        const rowsUpdated = await knex('pessoas').where({ id }).update(pessoa);
        return rowsUpdated;
    },

    async delete(id) {
        const rowsDeleted = await knex('pessoas').where({ id }).del();
        return rowsDeleted;
    }
}
