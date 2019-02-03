let {check, validationResult}  = require('express-validator/check');

module.exports = function(aplicacao){
    aplicacao.get('/', function(requisicao, resposta){
        aplicacao.app.controllers.index.home(aplicacao, requisicao, resposta);
    });

    aplicacao.post('/chat',[
        check('Apelido', 'Apelido é obrigatório').not().isEmpty(),
        check('Apelido', 'O apelido deve conter entre 3 e 15 caracteres').isLength({min: 3, max:15})
    ], function(requisicao, resposta){
        aplicacao.app.controllers.chat.iniciaChat(aplicacao, requisicao, resposta, validationResult);
    });
}