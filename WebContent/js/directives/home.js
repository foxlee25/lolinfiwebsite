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
        controller:function($scope, $q, redirect, getSummoner, RiotSummonerApi){
			
			$scope.searchSummonerById = function(input){
				RiotSummonerApi.setSummonerId(input);
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
			}
			
            $scope.searchSummoner = function(input){
				if(input){
					debugger;
					//user search by name
					if(isNaN(input)){
						RiotSummonerApi.setSummonerName(encodeURI(input));
						var promise = RiotSummonerApi.getChampionGeneralByName();
						
						promise.then(function(payload){
							if(payload.status == 200){
								var data = payload.data;
								$scope.searchSummonerById(Object.keys(data)[0]);
							}else{
								$scope.searchInput.value = "";
								$scope.placeHolder = "No Match Found";
							}
						});
					}else{
						$scope.searchSummonerById(input);
					}
					
				}else{
					$scope.placeHolder = "Search Can't be Empty!"
				}
            }
			
			//means this is called from the rank page
			//bit of a hack around... but for now 
			if(RiotSummonerApi.getSummonerId()!= "" 
			   || typeof RiotSummonerApi.getSummonerId() != 'undefined'){
				var id = RiotSummonerApi.getSummonerId();
				$scope.searchSummoner(id);
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