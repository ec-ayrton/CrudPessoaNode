
module.exports = {

    TrataRetornoErro(error,res ){
        const erro = JSON.parse(error.message);
        if(erro.codigo === 'erros_validacao') {
            console.error(error.message)
            res.status(422).send(erro.mensagem)
        }else if(erro.codigo ==='chave duplicada'){
            console.error(error.message)
            res.status(409).send(erro.mensagem)
        }else if(erro.codigo ==='Recurso não encontrado.'){
            console.error(error.message)
            res.status(404).send(erro.mensagem)
        }else{
            console.error(error.message);
            res.status(500).send(erro.mensagem);
        }
    }
};
