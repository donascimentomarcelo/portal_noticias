function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    var query = 'SELECT * FROM noticias';
    this._connection.query(query, callback);
};

NoticiasDAO.prototype.getNoticia = function(callback) {
    var query = 'SELECT * FROM noticias where id = 1';
    this._connection.query(query, callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
    console.log(noticia);
    this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.ultimaNoticia = function(callback) {
    this._connection.query(
        'SELECT * FROM noticias ORDER BY id DESC LIMIT 3',
        callback
        );
}

module.exports = function() {
    return NoticiasDAO;
}