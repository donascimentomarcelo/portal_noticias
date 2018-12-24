module.exports = function(application) {
    application.get('/noticia', function(req, res) {

        var connection = application.config.db_connection();
        var noticiasModel = application.app.models.noticiasModel;
        
        noticiasModel.getNoticias(connection, function(error, result){
            res.render('noticias/noticia', {noticia : result});
        });
    });
}