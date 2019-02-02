let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

//INICIALIZAR OBJETO DO EXPRESS
let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;