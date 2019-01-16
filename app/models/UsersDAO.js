var objectId = require('mongodb').ObjectID; 

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

UsersDao.prototype.getAll = function(res) {
    this.connection.open(function(error, mongoClient) {
        mongoClient.collection('users',function(error, collection) {
            collection.find().toArray(function(err, result){
                if (error){
                    res.json(error);
                } else {
                    res.json(result);
                }
                mongoClient.close();
            })
        });
    });
}

UsersDao.prototype.findOne = function(res, id) {
        this.connection.open(function(error, mongoClient) {
            mongoClient.collection('users', function(error, collection) {
                collection.find(objectId(id)).toArray(function(err, result){
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

UsersDao.prototype.update = function(res, req) {
    this.connection.open(function(error, mongoClient) {
        mongoClient.collection('users', function(error, collection) {
            collection.update(
                { _id : objectId(req.params.id)},
                { $set : { name: req.body.name }},
                {},
                function(error, result) {
                    if (error){
                        res.json(error);
                    } else {
                        res.json(result);
                    }
                    mongoClient.close();  
                }
            );
        });
    });
}

UsersDao.prototype.destroy = function(res, req) {
    this.connection.open(function(error, mongoClient) {
        mongoClient.collection('users', function(error, collection) {
            collection.remove(
                { _id : objectId(req.params.id)},
                function(error, result) {
                    if (error){
                        res.json(error);
                    } else {
                        res.json(result);
                    }
                    mongoClient.close();  
                }
            );
        });
    });
}

UsersDao.prototype.saveImage = function(data, res, req) {
    this.connection.open(function(error, mongoClient) {
        mongoClient.collection('users', function(error, collection) {
            collection.update(
                { _id : objectId(data._id)},
                { $set : { url_image: data.url_image }},
                {},
                function(error, result) {
                    if (error){
                        res.json(error);
                    } else {
                        res.json(result);
                    }
                    mongoClient.close();  
                }
            );
        });
    });
}

UsersDao.prototype.authenticate = function(user, req, res) {
    console.log(user);
    this.connection.open(function(error, mongoClient) {
        mongoClient.collection('users', function(error, collection) {
            collection.find(user).toArray(function(error, result){
                console.log(result[0])
                if(result[0] != undefined) {
                    req.session.authorized = true;
                }

                if (req.session.authorized) {
                    res.send('User authorized');
                } else {
                    res.send('access denied');
                }
            });
            mongoClient.close();
        });
    });
}

module.exports = function() {

    return UsersDao;
}