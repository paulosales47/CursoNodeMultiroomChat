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
});