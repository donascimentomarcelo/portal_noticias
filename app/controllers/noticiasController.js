module.exports.noticias = function(application, res, req) {
    var connection = application.config.db_connection();
    var dao = new application.app.models.NoticiasDAO(connection);

    dao.getNoticias(function(error, result){
        res.render('noticias/noticias', {noticias : result});
    });
}

module.exports.noticia = function(application, res, req) {
    var connection = application.config.db_connection();
    var dao = new application.app.models.NoticiasDAO(connection);
    
    var obj = req.query;

    dao.getNoticia(obj ,function(error, result){
        res.json({noticia : result});
    });
}

module.exports.ultimaNoticia = function(application, res, req) {
    var connection = application.config.db_connection();
    var dao = new application.app.models.NoticiasDAO(connection);

    dao.ultimaNoticia(function(error, result){
        res.json({ result });
    })
}