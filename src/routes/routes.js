const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/pessoaController');

router.get('/pessoas', PessoaController.listarTodasPessoas);
router.post('/pessoas', PessoaController.cadastrar);

module.exports = router;
