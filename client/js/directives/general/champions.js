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
            $("html").css("background","url('images/otherPageBase.jpg')");
			scope.loadingPagination = {maxIndex:0,pageIndex:1,show:false};
        },
        controller:function($scope, RiotSummonerApi, Cache, redirect){
            if(RiotSummonerApi.getSummonerId() === null){
                if(Cache.get("SummonerId")){
                    RiotSummonerApi.setSummonerId(Cache.get("SummonerId"));
                }else{
                    redirect("/base/baseHome");
                }
            }

			RiotSummonerApi.getInfo('champion')
                .success(function(data){
                    $scope.champions = data.champions;
                    $scope.loadingPagination.show = true;
                    $scope.loadingPagination.pageIndex = 1;
                    $scope.loadingPagination.maxIndex = Math.ceil(data.champions.length/20);
			     })
                .error(function(e){
                    console.error(e + " can't get summoner champion");
                });
			
			$scope.loadPage = function(index){
				$scope.loadingPagination.pageIndex = index;
				window.scrollTo(0, 0);
			};
            
            $scope.matchOptionsLeague = 'ALL';

            $scope.setFilter = function(newValue){
              $scope.matchOptionsLeague = newValue;
            };
            
            $scope.isSetFilter = function(tabName){
              return $scope.matchOptionsLeague === tabName;
            };
        }
    };
});