/**
*champions
*/
app.directive('lolChampionsChampions',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/general/champions.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
        },
        controller:function($scope, RiotSummonerApi){
//            getApi.getChampion().success(function(data){
//                $scope.champions = data;
//            });

			RiotSummonerApi.getChampionRank().success(function(data){
				$scope.champions = data.champions;
			});
        }
    }
});