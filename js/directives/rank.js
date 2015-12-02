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
			$("body").css("background-image","url('../images/otherbg.jpg')");
        },
        controller:function($scope,getApi,loadSummoner,redirect){
            getApi.getChallengerInfo().success(function(data){
                $scope.challengerInfo = data;
            });
			
			$scope.loadSummoner = function(challenger){
				$scope.config.searchToggle = false;
				loadSummoner.setSummoner(challenger);
				redirect("/base/baseHome/baseChampionGeneral");
			}
        }
    }
});