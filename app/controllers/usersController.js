module.exports.save = function(application, req, res) {
    var dataForm = req.body;

    var connection = application.config.db_connection;
    var UserDAO = new application.app.models.UsersDAO(connection);

    UserDAO.save(dataForm, res);
}

module.exports.find = function(application, req, res) {
    var connection = application.config.db_connection;
    var UserDAO = new application.app.models.UsersDAO(connection);

    UserDAO.find(res);
}