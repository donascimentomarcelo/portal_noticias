module.exports.save = function(application, req, res) {
    const dataForm = req.body;
    const UserDAO = getConnection(application);

    UserDAO.save(dataForm, res);
}

module.exports.getAll = function(application, req, res) {
    const UserDAO = getConnection(application);
    UserDAO.getAll(res);
}

module.exports.findOne = function(application, req, res) {
    const UserDAO = getConnection(application);
    UserDAO.findOne(res, req.params.id);
}

function getConnection(application) {
    const connection = application.config.db_connection;
    const UserDAO = new application.app.models.UsersDAO(connection);
    return UserDAO
}