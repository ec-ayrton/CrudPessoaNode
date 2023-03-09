const knex = require('../../database');

module.exports = {
    async list(req, res) {
        try {
            const pessoas = await knex('pessoa').select();
            res.json(pessoas);
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar as pessoas');
        }
    },

    async create(req, res) {
        try {
            const { nome, email, cpf } = req.body;
            const [id] = await knex('pessoa').insert({ nome, email, cpf }).returning('id');
            res.status(201).json({ id, nome, email, cpf });
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao cadastrar a pessoa');
        }
    },
};
