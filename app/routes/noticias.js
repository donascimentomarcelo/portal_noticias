module.exports = function(application) {
    application.get('/noticias', function(req, res) {

        var connection = application.config.db_connection();
        var dao = new application.app.models.NoticiasDAO(connection);

        dao.getNoticias(function(error, result){
            res.render('noticias/noticias', {noticias : result});
        });
    });
}