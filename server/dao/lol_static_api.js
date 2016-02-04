var request = require('request');
var url = require('../util/url');

var getChampions = function (res){
	console.log(url.URL.urls.RIOT_URL_CHAMPION + url.api_key);
	request((url.URL.urls.RIOT_URL_CHAMPION + url.URL.api_key), function(error, response, body){
		if(!error && response.statusCode === 200){
			res.send(body);
		}
	});
};

var getChampionDetail = function(id, res){
	var urls = [];
	urls = url.URL.urls.RIOT_URL_CHAMPIONDETAIL.split("?");
	console.log(urls[0] + "/" + id + "?" + urls[1] + url.URL.api_key);
	request((urls[0] + "/" + id + "?" + urls[1] + url.URL.api_key), function(error, response, body){
		if(!error && response.statusCode === 200){
			res.send(body);
		}
	});		
};

var getItems = function(res){
	request((url.URL.urls.RIOT_URL_ITEM + url.URL.api_key), function(error, response, body){
		if(!error && response.statusCode === 200){
//            console.log("=============");
//            console.log(response);
//            console.log("=============");
			res.send(body);
            
		}
	});
};

module.exports.getChampions = getChampions;
module.exports.getChampionDetail = getChampionDetail;
module.exports.getItems = getItems;
