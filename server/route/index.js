module.exports = function(app, lolStaticApi, lolSummonerApi){
	var apicache = require('apicache').options({debug: true}).middleware;
	var api = '/LolInfi/';

	function fetchLolStatic(req, res, next){
		req.apicacheGroup = req.params.genre;
		switch(req.query.genre){
			case "champion":
				lolStaticApi.getChampions(res);
				break;
			case "champion_detail":
				var id = req.headers.id;
				lolStaticApi.getChampionDetail(id, res);
				break;
			case "item":
				lolStaticApi.getItems(res);
				break;
            case "challenger_info":
                lolStaticApi.getChallengerInfo(res);
                break;
			default:
				responseString = "";
				res.send(responseString);
		}
	}

	function fetchLolSummoner(req ,res, next){
		var id = req.params.id;
		switch(req.params.genre){
			case "getid":
				lolSummonerApi.getSummonerId(id, res);
				break;
			case "general":
				lolSummonerApi.getSummonerGeneral(id, res);
				break;
			case "champion":
				lolSummonerApi.getSummonerChampion(id, res);
				break;
			case "matchlist":
				lolSummonerApi.getMatchList(id, res);
				break;
			case "matchdetail":
				lolSummonerApi.getMatchDetail(id, res);
				break;
            case "charts":
				lolSummonerApi.getCharts(id, res);
				break;                
			default:
				res.send("");
		}
	}
    
    app.get(api + 'LolStatic/:genre?', apicache('10 hours'), fetchLolStatic);
	app.get(api + 'LolSummoner/:id/:genre', apicache('5 minutes'), fetchLolSummoner);
};
