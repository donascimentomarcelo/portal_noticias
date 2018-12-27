module.exports = function(application) {
    
    application.get('/form', function(req, res) {
        application.app.controllers.adminController.formulario(application, req, res);
    });

    application.post('/noticias/salvar', function(application, req, res) {
        application.app.controllers.adminController.salvar(application, req, res);
    });
}