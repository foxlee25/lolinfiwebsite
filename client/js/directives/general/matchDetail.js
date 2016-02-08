/**
*match detail
*/
app.directive('lolChampionsMatchDetail',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/general/matchDetail.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
        },
        controller:function($scope, getSummoner, RiotSummonerApi){
//            getApi.getMatches().success(function(data){
//                $scope.matches = data;
//            });
			
			/**
			* fake call to get match detail
			*/
//			getSummoner.getChampion($scope.summonerId, "match").success(function(data){
//					$scope.match = data; 
//				}).error(
//					function(){
//						console.log("error loading");
//					}
//				);
			
			RiotSummonerApi.getMatchDetail()
                .success(function(data){
				    $scope.match = data;
                }).error(function(e){
                    console.log(e + "can't get summoner match details");
                });
		}
        };
    }
);
