const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/pessoaController');

router.get('/pessoas', PessoaController.list);
router.post('/pessoas', PessoaController.create);

module.exports = router;
