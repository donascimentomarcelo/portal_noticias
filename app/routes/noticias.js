module.exports = function(application) {
    application.get('/noticias', function(req, res) {
        application.app.controllers.noticiasController.noticias(application, res, req);
    });

    application.get('/noticia', function(req, res) {
        application.app.controllers.noticiasController.noticia(application, res, req);
    });
}