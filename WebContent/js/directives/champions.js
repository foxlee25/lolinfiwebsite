/**
*champions
*/
app.directive('lolChampions',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/champions.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
//            scope.matchOptions = {"league":"Bronze"
//                      ,"Time":"Last Month"
//                      ,"queueType":"Solo Ranked"};
			$("body").css("background","url('images/otherbg.jpg')");
        },
        controller:function($scope,getApi,redirect,championDetail){
            getApi.getChampInfo("champion").success(function(data){
				console.log(JSON.stringify(data));
				debugger;
                $scope.champInfo = data;
            });
			
			$scope.setChampionDetail = function(input){
				championDetail.setChampDetail(input);
				redirect("/base/baseChampDetail");
			}
        }
    }
});