module.exports.iniciaChat = function(aplicacao, requisicao, resposta, validationResult){
    let formulario = requisicao.body;
    let errosFormulario = validationResult(requisicao);

    if(!errosFormulario.isEmpty()){
        resposta.render('index', {validacao: errosFormulario.array()});
        return;
    }

    resposta.render('chat');
}