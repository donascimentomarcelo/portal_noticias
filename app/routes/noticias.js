module.exports = function(application) {
    application.get('/noticias', function(req, res) {

        var connection = application.config.db_connection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function(error, result){
            res.render('noticias/noticias', {noticias : result});
        });
    });
}