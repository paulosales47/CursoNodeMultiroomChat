module.exports = function(aplicacao){
    aplicacao.get('/', function(requisicao, resposta){
        aplicacao.app.controllers.index.home(aplicacao, requisicao, resposta);
    });

    aplicacao.get('/chat', function(requisicao, resposta){
        aplicacao.app.controllers.chat.iniciaChat(aplicacao, requisicao, resposta);
    });
}