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
			scope.placeHolder = "Search for champion name,items ...";
			$("html").css("background","url('../images/indexbg.jpg') no-repeat center center fixed");
            $("html").css("-webkit-background-size","cover");
            $("html").css("-moz-background-size","cover");
            $("html").css("-o-background-size","cover");
            $("html").css("background-size","cover");
        },
        controller:function($scope, $q, $location, redirect, RiotSummonerApi, State, Cache){
            $scope.championPage = {"id":1};
			$scope.searchInput = {value:""};
			$scope.searchSummonerById = function(input){
				RiotSummonerApi.setSummonerId(input);
                Cache.set("SummonerId", input);
				RiotSummonerApi.getInfo('general')
					.success(function(data){
                        if(data != "null"){
                            $scope.summonerId = input;
                            $scope.championGeneral = data;
                            $scope.searchInput.value = "";
                            $scope.selectChampionPage(1);
                        }else{
                            $scope.searchInput.value = "";
                            $scope.placeHolder = "No Match Found";
                        }
				    })
                    .error(function(){
						$scope.searchInput.value = "";
						$scope.placeHolder = "No Match Found";
						console.log("error loading");
					});				
			};
			
            $scope.searchSummoner = function(input){
				if(input){
					//user search by name
					if(isNaN(input)){
						RiotSummonerApi.setSummonerName(encodeURI(input));
						var promise = RiotSummonerApi.getInfo('getid');
						
						promise.then(function(payload){
							if(payload.status === 200){
								var data = payload.data;
								console.log(JSON.stringify(payload));
								$scope.searchSummonerById(data[Object.keys(data)[0]].id);
							}else{
								$scope.searchInput.value = "";
								$scope.placeHolder = "No Match Found";
							}
						});
					}else{
						$scope.searchSummonerById(input);
					}
					
				}else{
					$scope.placeHolder = "Search Can't be Empty!";
				}
            };
			

			//means this is called from the rank page
			//bit of a hack around... but for now 
			if(RiotSummonerApi.getSummonerId()!== "" ||
               typeof RiotSummonerApi.getSummonerId() !== 'undefined'){
				var id = RiotSummonerApi.getSummonerId();
                $scope.summonerName = RiotSummonerApi.getSummonerName();
                $scope.division = RiotSummonerApi.getDivision();
                $scope.profileIconId = RiotSummonerApi.getProfileIconId();
				$scope.searchSummoner(id);
			}
			$scope.$watch("config.searchToggle",function(data){
				if(data){
					$("body").css("background","url('images/bg1.jpg')");
				}else{
					$("body").css("background","url('images/otherbg.jpg')");
				}
			});
            $scope.selectChampionPage = function(id){
                $scope.championPage.id = id;
                $scope.config.searchToggle = false;
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
                    case 5:
                        redirect("/base/baseHome/baseChampionMatchDetail");
                        break;
                    default:
                        redirect("/base/baseHome/baseChampionGeneral");
                }
                
            };
            //current page is sub page of base home
            if(State[$location.url()] !== 0){
                $scope.selectChampionPage(State[$location.url()]);
            }
    
        }
    };

});
