const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/pessoaController');
const ProdutoController = require('../controllers/produtoController');


router.get('/pessoas', PessoaController.listarTodasPessoas);
router.post('/pessoas', PessoaController.cadastrar);

router.get('/produtos', ProdutoController.listarTodosProdutos);
router.post('/produtos', ProdutoController.cadastrar);

module.exports = router;
