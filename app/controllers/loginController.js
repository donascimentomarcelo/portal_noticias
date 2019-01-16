module.exports.auth = function(application, req, res) {
    const connection = application.config.db_connection;
    const UserDAO = new application.app.models.UsersDAO(connection);
    UserDAO.authenticate(req.body, req, res);
}