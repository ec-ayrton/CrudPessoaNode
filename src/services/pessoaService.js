const PessoaRepository = require('../repositories/pessoaRepository');
const PessoaValidador = require('../validators/PessoaValidator')
module.exports = {

    async buscarTodasPessoas() {
        return  PessoaRepository.buscarTodasPessoas();
    },
    async salvar(pessoa) {
        await PessoaValidador.validarCampos(pessoa);
        return PessoaRepository.salvar(pessoa);
    }
}
