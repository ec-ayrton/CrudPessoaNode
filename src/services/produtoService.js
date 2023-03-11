const ProdutoRepository = require('../repositories/produtoRepository');

module.exports = {

    async buscarTodosProdutos() {
        return  ProdutoRepository.buscarTodosProdutos();
    },
    async salvar(produto) {
        return  ProdutoRepository.salvar(produto);
    }

}
