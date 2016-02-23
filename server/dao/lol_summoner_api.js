var request = require('request');
var fs = require('fs');
var async = require('async');
var _ = require('underscore');
var url = require('../util/url');

var getSummonerId = function(id, res){
	request((url.URL.urls.RIOT_URL_SUMMONERID + id + "?/api_key=" + url.URL.api_key), function(error, response, body){
		if(!error && response.statusCode === 200){
			console.log(JSON.stringify(body));
			res.send(body);
		}
	});
};

/**
* would be better if we use promise based http request since we are chaining two calls together
* for now just nest another request in the previous one
*/
var getSummonerGeneral = function(id, res){
	request((url.URL.urls.RIOT_URL_SUMMONER_GENERAL + id + "/summary?api_key=" + url.URL.api_key), function(error, response, body){
		if(!error && response.statusCode === 200){
			var data = body;
			request((url.URL.urls.RIOT_URL_SUMMONER_GENERAL + id + "/ranked?api_key=" + url.URL.api_key), function(error, response, body){
				if(!error && response.statusCode == 200){
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
							res.send(target);
						}
					});
				}
			});
		}
	});
};

var getSummonerChampion = function(id, res){
	request((url.URL.urls.RIOT_URL_SUMMONER_CHAMPION + id + "/ranked?api_key=" + url.URL.api_key), function(error, response, body){
		if(!error && response.statusCode === 200){
			console.log(JSON.stringify(body));
			res.send(body);
		}
	});		
};

var getMatchList = function(id, res){
	request((url.URL.urls.RIOT_URL_MATCHLIST + id + "/?seasons=SEASON2015&api_key=" + url.URL.api_key), function(error, response, body){
		if(!error && response.statusCode === 200){
			console.log(JSON.stringify(body));
			res.send(body);
		}
	});		
};

var getMatchDetail = function(id, res){
	request((url.URL.urls.RIOT_URL_MATCHDETAIL + id + "?api_key=" + url.URL.api_key), function(error, response, body){
		if(!error && response.statusCode === 200){
			console.log(JSON.stringify(body));
			res.send(body);
		}
	});		
};

var getCharts = function(id, res){
    fs.readFile('json/charts.json', 'utf8', function(error, data){
        if(!error){
            console.log(data);
            res.send(data);
        }
    });    
};

// in order to make 20+ api calls and send the response back when the call is done
// use async parallel module https://github.com/caolan/async
var getRecentGames = function(id, res){
    var collection = [];
    var funcStack = [];
	request((url.URL.urls.RIOT_URL_MATCHLIST + id + "?api_key=" + url.URL.api_key + "&beginIndex=0&endIndex=9"), function(error, response, body){
		if(!error && response.statusCode === 200){
            
            var callBack = function(err, results){
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

module.exports.getSummonerId = getSummonerId;
module.exports.getSummonerGeneral = getSummonerGeneral;
module.exports.getSummonerChampion = getSummonerChampion;
module.exports.getMatchList = getMatchList;
module.exports.getMatchDetail = getMatchDetail;
module.exports.getCharts = getCharts;
module.exports.getRecentGames = getRecentGames;

