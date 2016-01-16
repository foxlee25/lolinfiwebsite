/**
*rank
*/
app.directive('lolRank',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/rank.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
			$("body").css("background","url('images/otherbg.jpg')");
        },
        controller:function($scope,RiotApi,loadSummoner,redirect, RiotSummonerApi){
            RiotApi.getChallengerInfo().success(function(data){
                $scope.challengerInfo = data;
            });
			
			$scope.loadSummoner = function(challenger){
				$scope.config.searchToggle = false;
				RiotSummonerApi.setSummonerId(challenger.playerOrTeamId);
				redirect("/base/baseHome/baseChampionGeneral");
			}
        }
    }
});