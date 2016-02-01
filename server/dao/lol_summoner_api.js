var request = require('request');
var url = require('../util/url');

var getSummonerId = function(id, res){
	request((url.URL.urls.RIOT_URL_SUMMONERID + id + "?/api_key=" + url.URL.api_key), function(error, response, body){
		if(!error && response.statusCode === 200){
			console.log(JSON.stringify(body));
			res.send(body);
		}
	});
};

var getSummonerGeneral = function(id, res){
	request((url.URL.urls.RIOT_URL_SUMMONER_GENERAL + id + "/summary?api_key=" + url.URL.api_key), function(error, response, body){
		if(!error && response.statusCode === 200){
			console.log(JSON.stringify(body));
			res.send(body);
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

module.exports.getSummonerId = getSummonerId;
module.exports.getSummonerGeneral = getSummonerGeneral;
module.exports.getSummonerChampion = getSummonerChampion;
module.exports.getMatchList = getMatchList;
module.exports.getMatchDetail = getMatchDetail;
