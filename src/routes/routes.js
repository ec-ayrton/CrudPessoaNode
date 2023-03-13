const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/pessoaController');


router.get('/pessoas', PessoaController.listarTodasPessoas);
router.post('/pessoas', PessoaController.cadastrar);
router.delete('/pessoas/:id', PessoaController.removerPessoa);
router.put('/pessoas/:id',PessoaController.editarPessoa)

module.exports = router;
