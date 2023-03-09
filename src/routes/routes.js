const express = require('express');
const router = express.Router();
const PessoaController = require('../../src/controllers/pessoaController');

router.get('/pessoas', PessoaController.list);
router.post('/pessoas', PessoaController.create);

module.exports = router;
