module.exports = function(application) {
    application.get('/form', function(req, res) {
        res.render('admin/form_add_noticia');
    });
    application.post('/noticias/salvar', function(req, res) {
        var noticias = req.body;

        var connection = application.config.db_connection();
        var dao = new application.app.models.NoticiasDAO(connection);

        dao.salvarNoticia(noticias, function(error, result){
            res.redirect('/noticias');
        });
    });
}