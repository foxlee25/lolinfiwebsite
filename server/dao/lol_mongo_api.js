var mongoClient = require("mongodb").MongoClient;
var pmongo = require('promised-mongo').compatible();
var url = require('../util/url');
var fetch;
var exports = module.exports = {};

var fetchCollection = function(db, genre, callback){
    var collection = db.collection(genre);
    collection.find({}).toArray(function(err, docs){
        callback(docs, db);
    });
};

/**
* This will fetch the data table that we know already exits
*/
exports.fetch = function(genre, callback){
    mongoClient.connect(url.URL.mongo_base, function(err, db){
        fetchCollection(db, genre, callback);
    });
};

var insertCollection = function(db, genre, data){
    var collection = db.collection(genre);
    if(typeof data === "string"){
        data = JSON.parse(data);
    }
    collection.insert(data);   
};

/**
* Insert new data into the collection
*/
exports.insert = function(genre, data){
    mongoClient.connect(url.URL.mongo_base, function(err, db){
        insertCollection(db, genre, data)
    });
};

var fetchPromiseCollection = function(genre){
    mongoClient.connect(url.URL.mongo_base, function(err, db){
            var collection = db.collection(genre);
            collection.find({}).toArray(function(err, docs){
                console.log(docs.length+"&&&&&");
            });
            var db = pmongo(url.URL.mongo_base);
            var collection = db.collection(genre);
            console.log(db.collection());
            return db.collection().find().toArray();            
    });
};

/**
* Will fetch the data table from collection and return a promise
* No guarantee if the data exists in the collection
*/
exports.fetchPromise = function(genre){
    return fetchPromiseCollection(genre);
};

var dropCollection = function(genre){
    var db = pmongo(url.URL.mongo_base);
    var collection = db.collection(genre);
    return db.collection.drop();
};

/**
* Drop the collection, return a promise
*/
exports.dropPromise = function(genre){
    return dropCollection(genre);
};