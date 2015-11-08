/**
* call all the riot API here
*/

app.factory('getResponse',function($http){
    return{
        //get champion for version 1.2
        getChampion:function(apiKey,region){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v1.2/champion?api_key='+apiKey);
        },
        //get champion by its id
        getChampionById:function(apiKey,region,id){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v1.2/champion/'+id+'?api_key='+apiKey);
        },
        //get current game
        getCurrentGame:function(apiKey,platformId,summonerId){
        return $http.get('https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/'+platformId+'/'+summonerId+'?api_key='+apiKey);
        },
        //get festured game
        getFeaturedGame:function(apiKey){
        return $http.get('https://na.api.pvp.net/observer-mode/rest/featured?api_key='+apiKey);
        },
        //get game
        getGame:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v1.3/game/by-summoner/'+summonerId+'/recent?api_key='+apiKey);
        },
        //get  league by summonerid
        getLeagueBySummoner:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.5/league/by-summoner/'+summonerId+'?api_key='+apiKey);
        },
        //get league entry by summonerid
        getLeagueEntryBySummoner:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.5/league/by-summoner/'+summonerId+'/entry?api_key='+apiKey);
        },
        //get league by team
        getLeagueEntryByTeam:function(apiKey,region,teamId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.5/league/by-team/'+teamId+'?api_key='+apiKey);
        },
        //getleague entry by team
        getLeagueEntryByTeam:function(apiKey,region,teamId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.5/league/by-team/'+teamId+'/entry?api_key='+apiKey);
        },
        //get league by challenger
        getLeagueEntryByChallenger:function(apiKey,region){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.5/league/challenger?api_key='+apiKey);
        },
        //get league by master
        getLeagueEntryByMaster:function(apiKey,region){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.5/league/master?api_key='+apiKey);
        },
        //get lol status
        getLolStatus:function(apiKey){
        return $http.get('https://na.api.pvp.net/shards?api_key='+apiKey);
        },
        //get lol status by region
        getLolStatusByRegion:function(apiKey,region){
        return $http.get('https://na.api.pvp.net/shards/'+region+'?api_key='+apiKey);
        },
        //get match
        getMatch:function(apiKey,region,matchId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.2/match/'+matchId+'?api_key='+apiKey);
        },
        //get match history
        getMatchHsitory:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.2/matchhistory/'+summonerId+'?api_key='+apiKey);
        },
        //get match list
        getMatchList:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.2/matchlist/by-summoner/'+summonerId+'?api_key='+apiKey);
        },
        //get stats rank
        getStatsRank:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v1.3/by-summoner/'+summonerId+'/ranked?api_key='+apiKey);
        },
        //get stats summary
        getStatsSummary:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v1.3/by-summoner/'+summonerId+'/summary?api_key='+apiKey);
        },
        //get summoner by name
        getSummonerByName:function(apiKey,region,summonerName){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v1.4/summoner/by-name/'+summonerName+'?api_key='+apiKey);
        },
        //get summoner by id
        getSummonerById:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v1.4/summoner/'+summonerId+'?api_key='+apiKey);
        },
        //get summoner mastery
        getSummonerMastery:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v1.4/summoner/'+summonerId+'/masteries?api_key='+apiKey);
        },
        //get summoner name
        getSummonerName:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v1.4/summoner/'+summonerId+'/name?api_key='+apiKey);
        },
        //get summoner runes
        getSummonerRunes:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v1.4/summoner/'+summonerId+'/runes?api_key='+apiKey);
        },
        //get team by summonerid
        getTeamBySummonerId:function(apiKey,region,summonerId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.4/team/by-summoner/'+summonerId+'?api_key='+apiKey);
        },
        //get team by teamid
        getTeamByTeamId:function(apiKey,region,teamId){
        return $http.get('https://na.api.pvp.net/api/lol/'+region+'/v2.4/team/'+teamId+'?api_key='+apiKey);
        }
    }
});

//get static data
app.factory('getStaticData',function($http){
    return{
        //retrieve champion list
        getChampionList:function(apiKey,region){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/champion?champData=image&api_key='+apiKey);
        },
        //retrieve champion by id
        getChampionById:function(apiKey,region,id){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/champion/'+id+'?api_key='+apiKey);
        },
        //retrieve item list
        getItemList:function(apiKey,region){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/item?api_key='+apiKey);
        },
        //retrieve item by id
        getItemById:function(apiKey,region,id){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/item/'+id+'?api_key='+apiKey);
        },
        //retrieve language string ps: i have no idea what this is
        getLanguageString:function(apiKey,region){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/language-strings?api_key='+apiKey);
        },
        //retrieve supported languages
        getLanguage:function(apiKey,region){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/languages?api_key='+apiKey);
        },
        //retrieve map data
        getMapData:function(apiKey,region){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/map?api_key='+apiKey);
        },
        //retrieve mastery list
        getMasteryList:function(apiKey,region){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/mastery?api_key='+apiKey);
        },
        //retrieve mastery by id
        getMasteryById:function(apiKey,region,id){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/mastery/'+id+'?api_key='+apiKey);
        },
        //retrieve realm data
        getRealmData:function(apiKey,region){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/realm?api_key='+apiKey);
        },
        //retrieve rune list
        getRuneList:function(apiKey,region){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/rune?api_key='+apiKey);
        },
        //retrieve rune by id
        getRuneList:function(apiKey,region,id){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/rune/'+id+'?api_key='+apiKey);
        },
        //retrieve summoner spell list
        getSummonerSpellList:function(apiKey,region){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/summoner-spell?api_key='+apiKey);
        },
        //retrieve summoner spell by id
        getSummonerSpellById:function(apiKey,region,id){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/summoner-spell/'+id+'?api_key='+apiKey);
        },
        //retrieve version data
        getVersions:function(apiKey,region){
            return $http.get('https://na.api.pvp.net/api/lol/static-data/'+region+'/v1.2/versions?api_key='+apiKey);
        }
    }
});

/**
* has to install the globaliztion cordova plugin
*/

//get globalization for the default device language, return language, use language.value to distinguish the value
app.factory("getLanguage",function(){
    return navigator.globalization.getPreferredLanguage();
});


/**
* Change window location
*/
app.factory('redirect',function($location,$rootScope){
    return function(path){
        $location.path(path);
    }
});






