module.exports = function(application) {
    application.get('/form', function(req, res) {
        res.render('admin/form_add_noticia', {validacao : {}});
    });
    application.post('/noticias/salvar', function(req, res) {
        var noticias = req.body;
        
        req.assert('titulo', 'Campo obrigatorio').notEmpty();
        req.assert('resumo', 'Campo obrigatorio').notEmpty();
        req.assert('resumo', 'Campo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Campo obrigatorio').notEmpty();

        var erros = req.validationErrors();

        if(erros) {
            res.render('admin/form_add_noticia', {validacao : erros});
            return;
        }

        var connection = application.config.db_connection();
        var dao = new application.app.models.NoticiasDAO(connection);

        dao.salvarNoticia(noticias, function(error, result){
            res.redirect('/noticias');
        });
    });
}