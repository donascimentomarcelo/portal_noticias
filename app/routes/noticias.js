module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        var connection = app.config.db_connection();
        var query = 'SELECT * FROM noticias';
        connection.query(query, function(error, result){
            res.render('noticias/noticias', {noticias : result});
        });
    });
}