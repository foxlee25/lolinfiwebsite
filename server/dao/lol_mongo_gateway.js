var mongo = require('./lol_mongo_api');
var exports = module.exports = {};

/**
* Abstract function to 
*/
exports.commonFetch = function(genre, func, res){
    mongo.fetch(genre, function(data, db){
            db.close();
            console.log("&&&"+data.length);
            if(data.length>0){
                res.send(data[0]);
            }else if(data.length === 0){
                func();
            }
    });    
};