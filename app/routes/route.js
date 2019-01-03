module.exports = function(application) {
    application.post('/user', function(req, res) {
        application.app.controllers.usersController.save(application, req, res);
    });

    application.get('/user', function(req, res) {
        application.app.controllers.usersController.getAll(application, req, res);
    });

    application.get('/user/:id', function(req, res) {
        application.app.controllers.usersController.findOne(application, req, res);
    });
}