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

    application.put('/user/:id', function(req, res) {
        application.app.controllers.usersController.update(application, req, res);
    });

    application.delete('/user/:id', function(req, res) {
        application.app.controllers.usersController.destroy(application, req, res);
    });

    application.post('/user/upload', function(req, res) {
        application.app.controllers.usersController.upload(application, req, res);
    });
}