const knex = require('../database');

module.exports = {
    async salvar(pessoa) {
        const personFromDb = await knex('pessoa').insert(pessoa).returning(['id', 'nome']);
        return personFromDb;
    },

    async buscarPorId(id) {
        const pessoa = await knex('pessoa').where({ id }).first();
        return pessoa;
    },

    async buscarTodasPessoas() {
        const pessoas = await knex('pessoa').select('*');
        return pessoas;
    },

    async atualizarPessoa(id, pessoa) {
        const rowsUpdated = await knex('pessoa').where({ id }).update(pessoa);
        return rowsUpdated;
    },

    async remover(id) {
        const rowsDeleted = await knex('pessoa').where({ id }).del();
        return rowsDeleted;
    }
}
