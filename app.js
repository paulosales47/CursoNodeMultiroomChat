let socketIo = require('socket.io')
let app = require('./config/server');

let server = app.listen(3001, function(){
    console.log('Servidore Online');
});

let io = socketIo.listen(server);
app.set('io', io);

io.on('connect', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    });

    socket.on('msgServidor', function(data){
        //MENSAGENS
        socket.emit('msgCliente', data);
        socket.broadcast.emit('msgCliente', data);

        if(parseInt(data.apelido_atualizado) == 0){
            console.log('PARTICIPANTES');
            //PARTICIPANTES
            socket.emit('participantesCliente', {apelido: data.apelido});
            socket.broadcast.emit('participantesCliente', {apelido: data.apelido});
        }
    });


});