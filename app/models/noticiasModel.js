module.exports = function() {

    this.getNoticias = function(connection, callback) {
        var query = 'SELECT * FROM noticias';
        connection.query(query, callback);
    };

    this.getNoticia = function(connection, callback) {
        var query = 'SELECT * FROM noticias where id = 1';
        connection.query(query, callback);
    };

    this.salvarNoticia = function(noticia, connection, callback) {
        connection.query('insert into noticias set ?', noticia, callback);
    }

    return this;
}