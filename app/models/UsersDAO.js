function UsersDao(connection) {
    this.connection = connection();
}

UsersDao.prototype.save = function(user, res) {
    this.connection.open(function(error, mongoClient){
        mongoClient.collection('users', function(error, collection){
            collection.insert(user, function(error, result){
                if (error){
                    res.json(error);
                } else {
                    res.json(result);
                }
                mongoClient.close();
            });
        });
    });
}

module.exports = function() {

    return UsersDao;
}