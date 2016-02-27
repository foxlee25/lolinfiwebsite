var request = require('request');
var fs = require('fs');
var async = require('async');
var _ = require('underscore');
var url = require('../util/url');
var mongo = require('./lol_mongo_api');
var gateway = require('./lol_mongo_gateway');

var getSummonerId = function(id, res){
    var getId = function(){
        request((url.URL.urls.RIOT_URL_SUMMONERID + id + "?/api_key=" + url.URL.api_key), function(error, response, body){
            if(!error && response.statusCode === 200){
                mongo.insert("Summoner_"+id, body);
                res.send(body);
            }
        });
    };
    
    gateway.commonFetch("Summoner_"+id, getId, res);
};

/**
* would be better if we use promise based http request since we are chaining two calls together
* for now just nest another request in the previous one
*/
var getSummonerGeneral = function(id, res){
    var getGeneral = function(){
        request((url.URL.urls.RIOT_URL_SUMMONER_GENERAL + id + "/summary?api_key=" + url.URL.api_key), function(error, response, body){
            if(!error && response.statusCode === 200){
                var data = body;
                request((url.URL.urls.RIOT_URL_SUMMONER_GENERAL + id + "/ranked?api_key=" + url.URL.api_key), function(error, response, body){
                    if(!error && response.statusCode === 200){
                        var target = {};
                        _.extend(target, JSON.parse(body), JSON.parse(data));
                        fs.readFile('json/champion_dict_lol_wiki.json', 'utf8', function(error, data){
                            if(!error){
                                data = JSON.parse(data);
                                _.map(target.champions, function(obj){
                                    if(data[obj.id]){
                                        obj.name = data[obj.id];
                                    }
                                });
                                mongo.insert("Summoner_General_"+id, body);
                                res.send(target);
                            }
                        });
                    }
                });
            }
        });
    };
    
    gateway.commonFetch("Summoner_General_"+id, getGeneral, res);
};

var getSummonerChampion = function(id, res){
    var getChampion = function(){
        request((url.URL.urls.RIOT_URL_SUMMONER_CHAMPION + id + "/ranked?api_key=" + url.URL.api_key), function(error, response, body){
            if(!error && response.statusCode === 200){
                mongo.insert("Summoner_Champion_"+id, body);
                res.send(body);
            }
        });		
    };
    
    gateway.commonFetch("Summoner_Champion_"+id, getChampion, res);
};

var getMatchList = function(id, res){
    var getList = function(){
        request((url.URL.urls.RIOT_URL_MATCHLIST + id + "/?seasons=SEASON2015&api_key=" + url.URL.api_key), function(error, response, body){
            if(!error && response.statusCode === 200){
                mongo.insert("Summoner_Match_List_"+id, body);
                res.send(body);
            }
        });	
    };
    
    gateway.commonFetch("Summoner_Match_List_"+id, getList, res);
};

var getMatchDetail = function(id, res){
    var getDetail = function(){
        request((url.URL.urls.RIOT_URL_MATCHDETAIL + id + "?api_key=" + url.URL.api_key), function(error, response, body){
            if(!error && response.statusCode === 200){
                mongo.insert("Summoner_Match_Detail_"+id, body);
                res.send(body);
            }
        });	
    };
    
    gateway.commonFetch("Summoner_Match_Detail_"+id, getDetail, res);
};

var getCharts = function(id, res){
    var getChart = function(){
        fs.readFile('json/charts.json', 'utf8', function(error, data){
            if(!error){
                mongo.insert("Summoner_Charts_"+id, data);
                res.send(data);
            }
        });    
    };
    
    gateway.commonFetch("Summoner_Charts_"+id, getChart, res);
};

// in order to make 7 api calls and send the response back when the call is done
// use async parallel module https://github.com/caolan/async
var getRecentGames = function(id, res){
    var getGame = function(){
        var collection = [];
        var funcStack = [];
        request((url.URL.urls.RIOT_URL_MATCHLIST + id + "?api_key=" + url.URL.api_key + "&beginIndex=0&endIndex=6"), function(error, response, body){
            if(!error && response.statusCode === 200){

                var callBack = function(err, results){
                    mongo.insert("Summoner_Recent_Games_"+id, collection);
                    res.send(JSON.stringify(collection));
                };

                JSON.parse(body).matches.map(function(obj){
                    var func = function(callBack){
                        request((url.URL.urls.RIOT_URL_MATCHDETAIL +
                                 obj.matchId +
                                 "?api_key=" +
                                 url.URL.api_key), function(error, response, body){
                            if(!error && response.statusCode === 200){
                                collection.push(JSON.parse(body));
                                callBack(null,  obj.matchId);
                            }
                        });	
                    };
                    funcStack.push(func);
                });

                async.parallel(funcStack, callBack);
            }
        });	
    };
    
    gateway.commonFetch("Summoner_Recent_Games_"+id, getGame, res);
};

module.exports.getSummonerId = getSummonerId;
module.exports.getSummonerGeneral = getSummonerGeneral;
module.exports.getSummonerChampion = getSummonerChampion;
module.exports.getMatchList = getMatchList;
module.exports.getMatchDetail = getMatchDetail;
module.exports.getCharts = getCharts;
module.exports.getRecentGames = getRecentGames;

