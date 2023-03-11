const PessoaRepository = require('../repositories/pessoaRepository');

module.exports = {

    async buscarTodasPessoas() {
        return  PessoaRepository.buscarTodasPessoas();
    },
    async salvar(pessoa) {
        return  PessoaRepository.salvar(pessoa);
    }

}
