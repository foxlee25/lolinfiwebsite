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
            scope.matchOptions = {"league":"Bronze"
                      ,"Time":"Last Month"
                      ,"queueType":"Solo Ranked"};
        },
        controller:function($scope,getApi,redirect){
			$("body").css("background-image","url('../../images/otherbg.jpg')");
            getApi.getChampInfo().success(function(data){
                $scope.champInfo = data;
            });
        }
    }
});