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
			scope.loadingPagination = {maxIndex:0,pageIndex:1,show:false};
        },
        controller:function($scope,RiotApi,loadSummoner,redirect, RiotSummonerApi){
            RiotApi.getChallengerInfo().success(function(data){
                $scope.challengerInfo = data;
				$scope.loadingPagination.show = true;
				$scope.loadingPagination.pageIndex = 1;
				$scope.loadingPagination.maxIndex = Math.round(data.entries.length/20);
            });
			
			$scope.loadSummoner = function(challenger){
				$scope.config.searchToggle = false;
				RiotSummonerApi.setSummonerId(challenger.playerOrTeamId);
				redirect("/base/baseHome/baseChampionGeneral");
			};
			
			$scope.loadPage = function(index){
				$scope.loadingPagination.pageIndex = index;
				window.scrollTo(0, 0);
			};
        }
    };
});
