/**
*match
*/
app.directive('lolChampionsMatch',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/general/match.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
            scope.matchOptions = {"gameType":"All"
                                  ,"champion":"All"
                                  ,"role":"All"};
			scope.loadingPagination = {maxIndex:0,pageIndex:1,show:false};
        },
        controller:function($scope, redirect, RiotSummonerApi, Cache){
//            getApi.getMatches().success(function(data){
//                $scope.matches = data;
//            });
            if(RiotSummonerApi.getSummonerId() === null){
                if(Cache.get("SummonerId")){
                    RiotSummonerApi.setSummonerId(Cache.get("SummonerId"));
                }else{
                    redirect("/base/baseHome");
                }
            }
        	
        	$scope.loadMatch = function(id){
				RiotSummonerApi.setMatchId(id);
                Cache.set("MatchId", id);
        		redirect("/base/baseHome/baseChampionMatchDetail");
        	};
			
			$scope.loadPage = function(index){
				$scope.loadingPagination.pageIndex = index;
				window.scrollTo(0, 0);
			};
			
			/**
			* call to get summoner matchlist from riotAPI
			*/
			RiotSummonerApi.getInfo('matchlist')
                .success(function(data){
                    $scope.matches = data.matches;
                    $scope.loadingPagination.show = true;
                    $scope.loadingPagination.pageIndex = 1;
                    $scope.loadingPagination.maxIndex = Math.round(data.matches.length/20);
                })
                .error(function(e){
                    console.error(e + "can't get summoner match list");
                });
            }
        };
    }
);
