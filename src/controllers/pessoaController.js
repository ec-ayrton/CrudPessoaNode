const PessoaService = require('../services/pessoaService')
const ErrorHandler = require('../errorHandler')
module.exports = {
    async listarTodasPessoas(req, res) {
        try {
            const pessoas = await PessoaService.buscarTodasPessoas()
            res.json(pessoas);
        } catch (err) {
            ErrorHandler.TrataRetornoErro(err,res);
        }
    },

    async cadastrar(req, res) {
        try {
            const pessoa = req.body;
            const pessoaCadastrada = await PessoaService.salvar(pessoa);
            res.status(201).json(pessoaCadastrada);
        } catch (err) {
            ErrorHandler.TrataRetornoErro(err,res);
        }
    },
    async removerPessoa(req, res) {
        try {
            const pessoaId = req.params.id;
            await PessoaService.remover(pessoaId);
            res.sendStatus(204);
        } catch (err) {
            ErrorHandler.TrataRetornoErro(err,res);
        }
    },
    async editarPessoa (req, res) {
        try {
            const id = req.params.id;
            const pessoa = req.body;
            const pessoaAtualizada = await PessoaService.editar(id, pessoa);
            res.json(pessoaAtualizada);
        } catch (err) {
            ErrorHandler.TrataRetornoErro(err,res);
        }
    }
};
