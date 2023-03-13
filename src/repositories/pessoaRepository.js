const knex = require('../database');

module.exports = {
    async salvar(pessoa) {
        try {
            await knex('pessoa').insert(pessoa);
            const [pessoaCadastrada] = await knex('pessoa').select('nome','email').where('cpf', '=', pessoa.cpf);
            return pessoaCadastrada ;
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                const erro = {codigo:'chave duplicada',mensagem:'Já existe uma pessoa com esse CPF cadastrada no sistema.'}
                throw  new Error(JSON.stringify(erro))
            } else {
                throw err;
            }
        }
    },

    async buscarPorId(id) {
        return knex('pessoa').where({id}).first();
    },

    async buscarTodasPessoas() {
        return knex('pessoa').select('*');
    },

    async atualizarPessoa(id, pessoa) {
        return knex('pessoa').where({id}).update(pessoa);
    },

    async remover(id) {
        return knex('pessoa').where({id}).del();
    }
}
