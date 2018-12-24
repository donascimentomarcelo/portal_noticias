var app = require('./config/server');

var route_home = require('./app/routes/home')(app);
var route_news = require('./app/routes/noticias')(app);
var route_form = require('./app/routes/formulario_noticia')(app);

app.listen(3000, function() {
    console.log('server running...');
});