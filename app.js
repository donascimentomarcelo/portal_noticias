var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.get('/tecnologia', function(req, res) {
    res.render('secao/tecnologia');
});

app.listen(3000, function() {
    console.log('server running...');
});