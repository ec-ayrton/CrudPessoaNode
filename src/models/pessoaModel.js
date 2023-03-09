const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV]);

module.exports = {
    async getAll() {
        return knex('pessoa').select();
    },

    async create(nome, email, cpf) {
        const [id] = await knex('pessoa').insert({ nome, email, cpf }).returning('id');
        return { id, nome, email, cpf };
    },
};
