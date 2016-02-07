module.exports = function(app, lolStaticApi, lolSummonerApi){
	var apicache = require('apicache').options({debug: true}).middleware;
	var api = '/LolInfi/';
	var responseString;

	function fetchLolStatic(req, res, next){
		req.apicacheGroup = req.params.genre;
		switch(req.query.genre){
			case "champion":
				responseString = lolStaticApi.getChampions(res);
				break;
			case "champion_detail":
				var id = req.headers.id;
				responseString = lolStaticApi.getChampionDetail(id, res);
				break;
			case "item":
				responseString = lolStaticApi.getItems(res);
				break;
			default:
				responseString = "";
				res.send(responseString);
		}
	}

	function fetchLolSummoner(req ,res, next){
		console.log('**********');
		var id = req.params.id;
		console.log(id+req.params.genre);
		switch(req.params.genre){
			case "getid":
				responseString = lolSummonerApi.getSummonerId(id, res);
				break;
			case "general":
				responseString = lolSummonerApi.getSummonerGeneral(id, res);
				break;
			case "champion":
				responseString = lolSummonerApi.getSummonerChampion(id, res);
				break;
			case "matchlist":
				responseString = lolSummonerApi.getMatchList(id, res);
				break;
			case "matchdetail":
				responseString = lolSummonerApi.getMatchDetail(id, res);
				break;
			default:
				responseString = "";
				res.send(responseString);
		}
	}
    
    app.get(api + 'LolStatic/:genre?', apicache('10 hours'), fetchLolStatic);
	app.get(api + 'LolSummoner/:id/:genre', apicache('5 minutes'), fetchLolSummoner);
};
