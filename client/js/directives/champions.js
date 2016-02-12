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
			scope.loadingPagination = {maxIndex:0,pageIndex:1,show:false};
        },
        controller:function($scope, RiotApi, redirect, util){
            RiotApi.getInfo("champion")
                .success(function(data){
                    $scope.champInfo = [];
                    for(var i in data.data){
                        $scope.champInfo.push(data.data[i]);
                    }
                    $scope.loadingPagination.show = true;
                    $scope.loadingPagination.pageIndex = 1;
                    $scope.loadingPagination.maxIndex = Math.round($scope.champInfo.length/20);
                })
                .error(function(e){
                    console.error(e + " can't get champions");
                });
			
			$scope.setChampionDetail = function(id){
				RiotApi.setChampDetailId(id);
				redirect("/base/baseChampDetail");
			};
			
			$scope.loadPage = function(index){
				$scope.loadingPagination.pageIndex = index;
				window.scrollTo(0, 0);
			};
        }
    };
});
