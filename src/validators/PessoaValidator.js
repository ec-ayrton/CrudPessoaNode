module.exports = {
    async validarCampos(pessoa) {
        const erros = [];

        if (!pessoa.nome || pessoa.nome.trim().length === 0) {
            erros.push({
                codigo: 'campo_vazio',
                mensagem: 'O campo nome é obrigatório.',
            });
        }

        if (!pessoa.email || pessoa.email.trim().length === 0) {
            erros.push({
                codigo: 'campo_vazio',
                mensagem: 'O campo email é obrigatório.',
            });
        } else if (!/\S+@\S+\.\S+/.test(pessoa.email)) {
            erros.push({
                codigo: 'formato_invalido',
                mensagem: 'O formato do email é inválido.',
            });
        }

        if (!pessoa.cpf || pessoa.cpf.trim().length === 0) {
            erros.push({
                codigo: 'campo_vazio',
                mensagem: 'O campo cpf é obrigatório.',
            });
        } else if (pessoa.cpf.trim().length !== 11) {
            erros.push({
                codigo: 'comprimento_invalido',
                mensagem: 'O campo cpf deve ter 11 caracteres.',
            });
        }

        if (erros.length > 0) {
            const erro = {codigo: 'erros_validacao', erros};
            throw  new Error(JSON.stringify(erro))
        }
    }
}