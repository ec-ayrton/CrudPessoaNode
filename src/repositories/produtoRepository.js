const knex = require('../database');

module.exports = {
    async salvar(produto) {
        const produtoCadastrado = await knex('produto').insert(produto).returning(['id', 'nome']);
        return produtoCadastrado;
    },

    async buscarPorId(id) {
        const produto = await knex('produto').where({ id }).first();
        return produto;
    },

    async buscarTodosProdutos() {
        const produto = await knex('produto').select('*');
        return produto;
    },

    async atualizarProduto(id, produto) {
        const rowsUpdated = await knex('produto').where({ id }).update(produto);
        return rowsUpdated;
    },

    async remover(id) {
        const rowsDeleted = await knex('produto').where({ id }).del();
        return rowsDeleted;
    }
}
