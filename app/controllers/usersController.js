fs = require('fs');
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

module.exports.update = function(application, req, res) {
    const UserDAO = getConnection(application);
    UserDAO.update(res, req);
}

module.exports.destroy = function(application, req, res) {
    const UserDAO = getConnection(application);
    UserDAO.destroy(res, req);
}

module.exports.upload = function(application, req, res) {
    const dataForm = req.body;
    const path_origin = req.files.file.path;
    const url_image = req.files.file.originalFilename;
    const path_destiny = './uploads/' + url_image;
    fs.rename(path_origin, path_destiny, function(err){
        if(err){
            res.status(500).json({error: err});
            return;
        }

        const data = {
            url_image: url_image,
            _id: dataForm.id
        };
        const UserDAO = getConnection(application);
        UserDAO.saveImage(data, res, req);
    });
}

function getConnection(application) {
    const connection = application.config.db_connection;
    const UserDAO = new application.app.models.UsersDAO(connection);
    return UserDAO
}