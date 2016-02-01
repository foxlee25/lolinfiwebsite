module.exports = function(app, lolStaticApi, lolSummonerApi){
	var api = '/LolInfi/';
	var responseString;

	app.get(api + 'LolStatic', fetchLolStatic);
	app.get(api + 'LolSummoner', fetchLolSummoner);

	function fetchLolStatic(req, res, next){
		switch(req.headers.genre){
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
		var id = req.headers.id;
		switch(req.headers.genre){
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
}