var connection = require('../../config/db-connection')();

module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        var query = 'SELECT * FROM noticias';
        connection.query(query, function(error, result){
            res.render('noticias/noticias', {noticias : result});
        });
    });
}