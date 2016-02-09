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
        controller:function($scope, RiotSummonerApi){
			
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
