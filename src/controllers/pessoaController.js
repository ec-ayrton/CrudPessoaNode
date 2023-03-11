const PessoaService = require('../services/pessoaService')

module.exports = {
    async listarTodasPessoas(req, res) {
        try {
            const pessoas = await PessoaService.buscarTodasPessoas()
            res.json(pessoas);
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar as pessoas');
        }
    },

    async cadastrar(req, res) {
        try {
            const pessoa = req.body;
            const pessoaCadastrada = await PessoaService.salvar(pessoa);
            res.status(201).json(pessoaCadastrada);
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao cadastrar a pessoa');
        }
    },
};
