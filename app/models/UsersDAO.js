function UsersDao(connection) {
    this.connection = connection();
}

UsersDao.prototype.save = function(user) {
    this.connection.open(function(error, mongoClient){
        mongoClient.collection('users', function(error, collection){
            collection.insert(user);
        })
    });
    console.log(this.connection);
}

module.exports = function() {

    return UsersDao;
}