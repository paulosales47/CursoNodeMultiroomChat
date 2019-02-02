module.exports = function(aplicacao){
    aplicacao.get('/', function(requisicao, resposta){
        resposta.send('TESTE');
    })
}