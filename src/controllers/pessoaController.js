const PessoaService = require('../services/pessoaService')
const ErrorHanlder = require('../errorHandler')
module.exports = {
    async listarTodasPessoas(req, res) {
        try {
            const pessoas = await PessoaService.buscarTodasPessoas()
            res.json(pessoas);
        } catch (err) {
            console.error(err);
            res.status(500).send(err.message);
        }
    },

    async cadastrar(req, res) {
        try {
            const pessoa = req.body;
            const pessoaCadastrada = await PessoaService.salvar(pessoa);
            res.status(201).json(pessoaCadastrada);
        } catch (err) {
            ErrorHanlder.TrataRetornoErro(err,res);
        }
    },
    async removerPessoa(req, res) {
        try {
            const pessoaId = req.params.id;
            await PessoaService.remover(pessoaId);
            res.sendStatus(204);
        } catch (err) {
            ErrorHanlder.TrataRetornoErro(err,res);
        }
    },
    async editarPessoa (req, res) {
        try {
            const id = req.params.id;
            const pessoa = req.body;
            const pessoaAtualizada = await PessoaService.editar(id, pessoa);
            res.json(pessoaAtualizada);
        } catch (err) {
            console.error(err);
            res.status(500).send(err.message);
        }
    }
};
