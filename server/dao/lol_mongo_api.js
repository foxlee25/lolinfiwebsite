var mongoClient = require("mongodb").MongoClient;
var url = require('../util/url');
var fetch;
var exports = module.exports = {};

var fetchCollection = function(db, genre, callback){
    var collection = db.collection(genre);
    collection.find({}).toArray(function(err, docs){
        callback(docs);
    });
}

exports.fetch = function(genre, res){
    mongoClient.connect(url.URL.mongo_base, function(err, db){
        fetchCollection(db, genre, function(data){
            db.close();
            res.send(data[0]);
        });
    });
};
