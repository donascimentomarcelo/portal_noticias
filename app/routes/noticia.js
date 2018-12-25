module.exports = function(application) {
    application.get('/noticia', function(req, res) {

        var connection = application.config.db_connection();
        var dao = new application.app.models.NoticiasDAO(connection);
        
        dao.getNoticia(function(error, result){
            res.render('noticias/noticia', {noticia : result});
        });
    });
}