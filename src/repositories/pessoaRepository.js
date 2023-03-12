const knex = require('../database');

module.exports = {
    async salvar(pessoa) {
        try {
            await knex('pessoa').insert(pessoa);

            const [pessoaCadastrada] = await knex('pessoa').select('nome','email').where('cpf', '=', pessoa.cpf);

            return pessoaCadastrada ;
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                throw new Error('Já existe uma pessoa com esse CPF cadastrada no sistema.');
            } else {
                throw err;
            }
        }
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
