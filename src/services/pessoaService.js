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
        const quantidadePessoasRemovidas =  await PessoaRepository.remover(pessoaId);
        if(quantidadePessoasRemovidas === 0){
            const error = {motivo:'Recurso não encontrado.',mensagem:'Não foi encontrada uma pessoa com esse ID.'}
            throw new Error(JSON.stringify(error))
        }
    },
    async editar(id, pessoa) {
        await PessoaValidador.validarCampos(pessoa);
        const pessoaAtualizada = await PessoaRepository.atualizarPessoa(id, pessoa);
        return pessoaAtualizada;
    }

}
