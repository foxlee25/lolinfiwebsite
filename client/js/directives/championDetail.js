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
			 championDetail.getChampDetail("champion_detail")
				.success(function(data){
				 	data.spells.map(function(value){
						value.image.full = value.image.full.replace(/([A-Z])/g, ' $1').trim();
						return value;
					});
					$scope.detail = data;
			})
        }
    }
});