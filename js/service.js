/**
* call mock data
*/
app.factory('getApi',function($http){
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
        getChampInfo:function(){
            return $http.get('json/champ_info.json');
        },
        getItemInfo:function(){
            return $http.get('json/item_info.json');
        },
        getChallengerInfo:function(){
            return $http.get('json/challenger_info.json');
        }
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