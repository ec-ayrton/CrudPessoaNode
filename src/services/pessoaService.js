const PessoaRepository = require('../repositories/pessoaRepository');

module.exports = {

    async findAll() {
        return await PessoaRepository.findAll();
    },
    async create(pessoa) {
        return await PessoaRepository.create(pessoa);
    }

}
