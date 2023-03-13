module.exports = {
    async validarCampos(pessoa) {
        let mensagem = '';
        if (!pessoa.nome || pessoa.nome.trim().length === 0) {
            mensagem = mensagem.concat('O campo nome é obrigatório.\n')
        }

        if (!pessoa.email || pessoa.email.trim().length === 0) {
            mensagem = mensagem.concat('O campo email é obrigatório.\n')
        } else if (!/\S+@\S+\.\S+/.test(pessoa.email)) {
            mensagem = mensagem.concat('O formato do email é inválido.\n')
        }

        if (!pessoa.cpf || pessoa.cpf.trim().length === 0) {
            mensagem = mensagem.concat('O campo cpf é obrigatório.\n')
        } else if (pessoa.cpf.trim().length !== 11) {
            mensagem = mensagem.concat('O campo cpf deve ter 11 caracteres.\n')
        }

        if (mensagem.length > 0) {
            const erro = {codigo: 'erros_validacao', mensagem};
            throw  new Error(JSON.stringify(erro))
        }
    }
}