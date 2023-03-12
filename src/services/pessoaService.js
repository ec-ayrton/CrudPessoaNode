const PessoaRepository = require('../repositories/pessoaRepository');
const PessoaValidador = require('../validators/PessoaValidator')
module.exports = {

    async buscarTodasPessoas() {
        return  PessoaRepository.buscarTodasPessoas();
    },
    async salvar(pessoa) {
        await PessoaValidador.validarCampos(pessoa);
        return PessoaRepository.salvar(pessoa);

    },
    async remover(pessoaId){
        const quantidadePessoasRemovidas =   PessoaRepository.remover(pessoaId);
        if(quantidadePessoasRemovidas === 0)
            throw new Error("Recurso não encontrado.")
    },
    async editar(id, pessoa) {
        await PessoaValidador.validarCampos(pessoa);
        const pessoaAtualizada = await PessoaRepository.atualizarPessoa(id, pessoa);
        return pessoaAtualizada;
    }

}
