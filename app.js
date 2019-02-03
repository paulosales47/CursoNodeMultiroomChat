let app = require('./config/server');

let server = app.listen(3001, function(){
    console.log('Servidore Online');
});

require('socket.io').listen(server);