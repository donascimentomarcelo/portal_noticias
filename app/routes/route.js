module.exports = function(application) {
    application.post('/user/save', function(req, res) {
        application.app.controllers.usersController.save(application, req, res);
    });

    application.get('/user/find', function(req, res) {
        application.app.controllers.usersController.find(application, req, res);
    })
}