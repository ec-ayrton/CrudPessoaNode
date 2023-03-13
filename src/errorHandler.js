
module.exports = {

    TrataRetornoErro(err,res ){
        const erro = JSON.parse(err.message);
        if(erro.motivo === 'Erro na validacao') {
            console.error(err.message)
            res.status(422).send(erro)
        }else if(erro.motivo ==='chave duplicada'){
            console.error(err.message)
            res.status(409).send(erro)
        }else if(erro.motivo ==='Recurso não encontrado.'){
            console.error(err.message)
            res.status(404).send(erro)
        }else{
            console.error(err.message);
            res.status(500).send(erro.mensagem);
        }
    }
};
