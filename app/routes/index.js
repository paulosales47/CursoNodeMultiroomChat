module.exports = function(aplicacao){
    aplicacao.get('/', function(requisicao, resposta){
        resposta.render('index');
    });

    aplicacao.post('/chat', function(){
        reposta.render('chat');
    });
}