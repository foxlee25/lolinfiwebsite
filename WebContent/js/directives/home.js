/**
*home
*/
app.directive('lolHome',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/home.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
            scope.championPage = {"id":1};
			scope.searchInput = {value:""};
			scope.placeHolder = "Search for champion name,items ...";
			$("body").css("background","url('images/bg1.jpg')");
        },
        controller:function($scope, redirect, getSummoner){
            $scope.searchSummoner = function(input){
				if(input){
					getSummoner.getChampion(input, "general")
						.success(function(data){
						if(data != "null"){
							$scope.config.searchToggle = false;
							$scope.summonerId = input;
							$scope.championGeneral = data;
							$scope.searchInput.value = "";
							redirect("/base/baseHome/baseChampionGeneral");
						}else{
							$scope.searchInput.value = "";
							$scope.placeHolder = "No Match Found";
						}
					}).error(
						function(){
							$scope.searchInput.value = "";
							$scope.placeHolder = "No Match Found";
							console.log("error loading");
						}
					);
				}else{
					$scope.placeHolder = "Search Can't be Empty!"
				}
            }
			
			$scope.$watch("config.searchToggle",function(data){
				if(data){
					$("body").css("background","url('images/bg1.jpg')")
				}else{
					$("body").css("background","url('images/otherbg.jpg')")
				}
			});
            
            $scope.selectChampionPage = function(id){
                $scope.championPage.id = id;
                switch($scope.championPage.id){
                    case 1:
                        redirect("/base/baseHome/baseChampionGeneral");
                        break;
                    case 2:
                        redirect("/base/baseHome/baseChampionChampions");
                        break;
                    case 3:
                        redirect("/base/baseHome/baseChampionCharts");
                        break;
                    case 4:
                        redirect("/base/baseHome/baseChampionMatch");
                        break;
                    default:
                        redirect("/base/baseHome/baseChampionGeneral");
                }
                
            }
        }
    }
});