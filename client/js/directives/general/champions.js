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
			scope.loadingPagination = {maxIndex:0,pageIndex:1,show:false};
        },
        controller:function($scope, RiotSummonerApi){
//            getApi.getChampion().success(function(data){
//                $scope.champions = data;
//            });

			RiotSummonerApi.getChampionRank().success(function(data){
				$scope.champions = data.champions;
				$scope.loadingPagination.show = true;
				$scope.loadingPagination.pageIndex = 1;
				$scope.loadingPagination.maxIndex = Math.round(data.champions.length/20);
			});
			
			$scope.loadPage = function(index){
				$scope.loadingPagination.pageIndex = index;
				window.scrollTo(0, 0);
			};
        }
    };
});
