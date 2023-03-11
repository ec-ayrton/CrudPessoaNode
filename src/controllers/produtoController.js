const ProdutoService = require('../services/produtoService')

module.exports = {
    async listarTodosProdutos(req, res) {
        try {
            const produtos = await ProdutoService.buscarTodosProdutos()
            res.json(produtos);
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar as pessoas');
        }
    },

    async cadastrar(req, res) {
        try {
            const produto = req.body;
            const produtoCadastrado = await ProdutoService.salvar(produto);
            res.status(201).json(produtoCadastrado);
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao cadastrar o produto');
        }
    },
};
