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
        },
        controller:function($scope, getApi, getSummoner, redirect){
//            getApi.getMatches().success(function(data){
//                $scope.matches = data;
//            });
        	
        	$scope.loadMatch = function(){
        		redirect("/base/baseHome/baseChampionMatchDetail");
        	}
			
			getSummoner.getChampion($scope.summonerId, "matches").success(function(data){
					$scope.matches = data; 
				}).error(
					function(){
						console.log("error loading");
					}
				);
            }
        }
    }
);