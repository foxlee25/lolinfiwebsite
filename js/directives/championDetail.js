/**
*champion detail
*/
app.directive('lolChampiondetail',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/championDetail.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
        },
        controller:function($scope,redirect,championDetail){
			$scope.detail = championDetail.getChampDetail();
        }
    }
});