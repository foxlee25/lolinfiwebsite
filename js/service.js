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
        }
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
