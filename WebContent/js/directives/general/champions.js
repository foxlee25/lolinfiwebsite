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
        controller:function($scope, getSummoner){
//            getApi.getChampion().success(function(data){
//                $scope.champions = data;
//            });

			getSummoner.getChampion($scope.summonerId, "champions").success(function(data){
					$scope.champions = data; 
				}).error(
					function(){
						console.log("error loading");
					}
				);
			
			console.log(JSON.stringify($scope.champions));
        }
    }
});