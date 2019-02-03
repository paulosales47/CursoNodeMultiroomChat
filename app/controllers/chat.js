module.exports.iniciaChat = function(aplicacao, requisicao, resposta, validationResult){
    let formulario = requisicao.body;
    let errosFormulario = validationResult(requisicao);

    if(!errosFormulario.isEmpty()){
        resposta.render('index', {validacao: errosFormulario.array()});
        return;
    }

    let mensagem = formulario.apelido.concat(' ', 'acaba de se conectar');
    aplicacao.get('io').emit('msgCliente', {apelido: formulario.apelido, mensagem: mensagem});
    
    resposta.render('chat', {formulario: formulario});
}