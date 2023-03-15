const erroMap = {
    'Erro na validacao': { status: 422, mensagem: 'Erro na validação' },
    'chave duplicada': { status: 409, mensagem: 'Chave duplicada' },
    'Recurso não encontrado.': { status: 404, mensagem: 'Recurso não encontrado' },
};

module.exports = {

    TrataRetornoErro(err,res ){
        if(err.message){
            const erro = JSON.parse(err.message);
            const error = erroMap[erro.motivo];
            console.log(error.mensagem)
            res.status(error.status).send(error.mensagem);
        } else{
            console.error(err.message);
            res.status(500).send(err.message);
        }
    }
};
