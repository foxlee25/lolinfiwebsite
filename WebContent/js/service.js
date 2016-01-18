/**
* call mock data
*/
app.factory('RiotApi',function($http){
    return{
        getChampion:function(){
            return $http.get('json/champions.json');
        },
        getCharts:function(){
            return $http.get('json/charts.json');
        },
        getGeneral:function(){
            return $http.get('json/general.json');
        },
        getMatch:function(){
            return $http.get('json/match.json');
        },
        getMatches:function(){
            return $http.get('json/matches.json');
        },
		/**
		* general url to get static data
		* by specifying the genre parameter to tell
		* which query to run
		*/
        getInfo:function(genre){
            return $http.get('http://localhost:8080/LolInfi/LolStatic'
							 ,{headers:{
							 'genre': genre
							 }});
        },
        getItemInfo:function(){
            return $http.get('json/item_info.json');
        },
        getChallengerInfo:function(){
            return $http.get('json/challenger_info.json');
        }
    }
})

/**
* mock call rest summoner api
*/
app.factory('getSummoner',function($http){
	return{
		getChampion:function(id, genre){
			return $http.get('http://localhost:8080/LolInfi/LolApi/SummonerApi'
							 ,{headers:{
							 'summoner': id,
							 'genre': genre
							 }});
		}
	}
})

/**
* call riot rest summoner api
*/
app.service('RiotSummonerApi',function($http){
	this.summonerId = null;
	this.matchId = null;
	this.summonerName = null;
	
	this.setMatchId = function(input){
		this.matchId = input;
	}
	
	this.getMatchId = function(){
		return this.matchId;
	}
	
	this.setSummonerId = function(input){
		this.summonerId = input;
	}
	
	this.getSummonerId = function(){
		return this.summonerId;
	}
	
	this.setSummonerName = function(input){
		this.summonerName = input;
	}
	
	this.getSummonerName = function(){
		return this.summonerName;
	}
	
	/**
	* get summoner general info by summoner id
	*/
	this.getChampionGeneral = function(){
		return $http.get('http://localhost:8080/LolInfi/LolSummoner'
							 ,{headers:{
							 'genre': "general",
							 'id': this.summonerId
							 }});
	}
	
	/**
	* get summoner id from name
	*/
	this.getChampionGeneralByName = function(){
		return $http.get('http://localhost:8080/LolInfi/LolSummoner'
							 ,{headers:{
							 'genre': "getid",
							 'id': this.summonerName
							 }});
	}
	
	/**
	* get summoner played chapmion list
	*/
	this.getChampionRank = function(){
		return $http.get('http://localhost:8080/LolInfi/LolSummoner'
							 ,{headers:{
							 'genre': "champion",
							 'id': this.summonerId
							 }});
	}
	
	/**
	* get summoner played matchlist
	*/
	this.getMatchList = function(){
		return $http.get('http://localhost:8080/LolInfi/LolSummoner'
							 ,{headers:{
							 'genre': "matchlist",
							 'id': this.summonerId
							 }});
	}
	
	/**
	* get match detail by match id
	*/
	this.getMatchDetail = function(){
		return $http.get('http://localhost:8080/LolInfi/LolSummoner'
							 ,{headers:{
							 'genre': "matchdetail",
							 'id': this.matchId
							 }});
	}
})

app.service('videoPlayer',function(){
    this.video = null;
    this.setVideo = function(input){
        this.video = input;
    }
    this.getVideo = function(){
        return this.video;
    }
})

app.service('championDetail',function($http){
	this.id = null;
	this.setChampDetailId = function(input){
		this.id = input;
	}
	this.getChampDetail = function(genre){
		return $http.get('http://localhost:8080/LolInfi/LolStatic'
						 ,{headers:{
						 'genre': genre,
						 'id':this.id
						 }});
	}
})

app.service('loadSummoner',function(){
	this.summoner = null;
	this.setSummoner = function(input){
		this.summoner = input;
	}
	
	this.getSummoner = function(){
		return this.summoner;
	}
})

/**
* Change window location
*/
app.factory('redirect',function($location,$rootScope){
    return function(path){
        $location.path(path);
    }
});

/**
*set video player url
*/
app.service('videoUrl',function(){
    
})

/**
* utility 
*/
app.service('util',function(){
	//get the length of associative array
	this.size = function(obj){
		var size = 0, key;
		for(key in obj){
			if(obj.hasOwnProperty(key)){
				size++;
			}
		}
		return size;
	}
})