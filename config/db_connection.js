var mongo = require('mongodb');

var mongoDB = function(){
    var db = new mongo.Db(
        'sistema_noticias',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    );

    return db;
}
module.exports = function(){
   return mongoDB;
}