/**
*items
*/
app.directive('lolItems',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/items.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
            scope.itemOption = {"filter":"All"};
        },
        controller:function($scope,getApi){
            getApi.getItemInfo().success(function(data){
                $scope.itemInfo = data;
            });
        }
    }
});