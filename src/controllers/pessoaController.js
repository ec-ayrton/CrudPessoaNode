const knex = require('../../database');
const PessoaService = require('../services/pessoaService')

module.exports = {
    async list(req, res) {
        try {
            const pessoas = await PessoaService.findAll()
            res.json(pessoas);
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar as pessoas');
        }
    },

    async create(req, res) {
        try {
            const pessoa = req.body;
            const pessoaCadastrada = await PessoaService.create(pessoa);
            res.status(201).json(pessoaCadastrada);
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao cadastrar a pessoa');
        }
    },
};
