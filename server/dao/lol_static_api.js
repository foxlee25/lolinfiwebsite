var request = require('request');
var fs  = require('fs');
var url = require('../util/url');
var mongo = require('./lol_mongo_api');
var gateway = require('./lol_mongo_gateway');

var getChampions = function (res){
    var getChampion = function(){
	   request((url.URL.urls.RIOT_URL_CHAMPION + url.URL.api_key), function(error, response, body){
            if(!error && response.statusCode === 200){
                mongo.insert("Champions", body);
                res.send(body);
            }
        });
    };
    
    gateway.commonFetch("Champions", getChampion, res);
};

var getChampionDetail = function(id, res){
    var getChampionDetail = function(){
        var urls = [];
        urls = url.URL.urls.RIOT_URL_CHAMPIONDETAIL.split("?");
        console.log(urls[0] + "/" + id + "?" + urls[1] + url.URL.api_key);
        request((urls[0] + "/" + id + "?" + urls[1] + url.URL.api_key), function(error, response, body){
            if(!error && response.statusCode === 200){
                mongo.insert("Champion_Detail_"+id, body);
                res.send(body);
            }
        });		
    }
    
    gateway.commonFetch("Champion_Detail_"+id, getChampionDetail, res);
};

var getItems = function(res){
    var getItems = function(){
        request((url.URL.urls.RIOT_URL_ITEM + url.URL.api_key), function(error, response, body){
            if(!error && response.statusCode === 200){
                mongo.insert("Item", body);
                res.send(body);
            }
        });         
    };
    
    gateway.commonFetch("Item", getItems, res);
};

var getChallengerInfo = function(res){
    var getInfo = function(){
        fs.readFile('json/challenger_info.json', 'utf8', function(error, data){
            if(!error){
                mongo.insert("Challenger_Info", data);
                res.send(data);
            }
        });       
    };
    
    gateway.commonFetch("Challenger_Info", getInfo, res);
};

module.exports.getChampions = getChampions;
module.exports.getChampionDetail = getChampionDetail;
module.exports.getItems = getItems;
module.exports.getChallengerInfo = getChallengerInfo;
