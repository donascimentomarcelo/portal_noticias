module.exports = function(app) {

    app.get('/noticias', function(req, res) {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'portal_noticias',
        });
    
        var query = 'SELECT * FROM noticias';
        connection.query(query, function(error, result){
            res.send(result);
        });
    });
}