/**
* call express middleware
*/
app.service('RiotApi',function($http){
    this.id = null;
    
	this.setChampDetailId = function(input){
		this.id = input;
	};
    
    this.getChampDetailId = function(){
        return this.id;
    };
    
    /**
    * general url to get static data
    * by specifying the genre parameter to tell
    * which query to run
    */
    this.getInfo = function(genre, id){
        if(id === undefined){
            return $http.get('http://localhost:8080/LolInfi/LolStatic?genre='+genre, {timeout: 1500});
        }else{
            return $http.get('http://localhost:8080/LolInfi/LolStatic/'+id+'?genre='+genre, {timeout: 1500});
        }
    };
});

/**
* call riot rest summoner api
*/
app.service('RiotSummonerApi',function($http){
	this.summonerId = null;
	this.matchId = null;
	this.summonerName = null;
	
	this.setMatchId = function(input){
		this.matchId = input;
	};
	
	this.getMatchId = function(){
		return this.matchId;
	};
	
	this.setSummonerId = function(input){
		this.summonerId = input;
	};
	
	this.getSummonerId = function(){
		return this.summonerId;
	};
	
	this.setSummonerName = function(input){
		this.summonerName = input;
	};
	
	this.getSummonerName = function(){
		return this.summonerName;
	};
    
    this.setDivision = function(input){
		this.division = input;      
    }
    
    this.getDivision = function(){
		return this.division;    
    }
    
    this.setProfileIconId = function(input){
		this.profileIconId = input;          
    }
    
    this.getProfileIconId = function(){
		return this.profileIconId;          
    }
    /**
    * get summoner data
    */
    this.getInfo = function(genre){
        if(genre === 'matchdetail'){
            return $http.
            get('http://localhost:8080/LolInfi/LolSummoner/'+this.matchId+'/'+genre, {timeout: 1500});
        }
        return $http.get('http://localhost:8080/LolInfi/LolSummoner/'+this.summonerId+'/'+genre, {timeout: 1500});
    };
});

/**
* facebook service to get user facebook profile info
*/
app.service('facebookService', function($q){
    this.getFaceBookInfo = function(){
        var deferred = $q.defer();
        FB.api('/me', function(response) {
            if (!response || response.error) {
                deferred.reject('Error occured');
            } else {
                deferred.resolve(response);
            }
        });
        return deferred.promise;
    };
});

app.service('videoPlayer',function(){
    this.video = null;
    this.setVideo = function(input){
        this.video = input;
    };
    
    this.getVideo = function(){
        return this.video;
    };
});

app.service('loadSummoner',function(){
	this.summoner = null;
	this.setSummoner = function(input){
		this.summoner = input;
	};
	
	this.getSummoner = function(){
		return this.summoner;
	};
});

/**
* Change window location
*/
app.factory('redirect',function($location){
    return function(path){
        $location.path(path);
    };
});

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
	};
});

/**
* get the match id and summoner id from localstorage in case of refresh
*/
app.service('Cache', function(){
    this.set = function (key, value){
        localStorage.setItem(key, value);
    };
    
    this.get = function (key){
        return localStorage.getItem(key);
    };
});