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
        controller:function($scope, getApi, getSummoner){
//            getApi.getMatches().success(function(data){
//                $scope.matches = data;
//            });
			
			getSummoner.getChampion($scope.summonerId, "match").success(function(data){
					$scope.match = data; 
				}).error(
					function(){
						console.log("error loading");
					}
				);
            }
        }
    }
);