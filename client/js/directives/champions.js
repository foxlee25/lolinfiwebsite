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
                    $scope.champInfo = [
                    {
                        "id": 1,
                        "name": "Annie",            
                        "cs": 19.0, 
                        "lastPlayed": 285.5724111012576, 
                        "games": 1, 
                        "kda": 2.8, 
                        "winRate": 1.0

                    }, 
                    {
                        "id": 8,
                        "name": "Vladimir",
                        "cs": 189.61111111111111, 
                        "lastPlayed": 122.07037210865171, 
                        "games": 18, 
                        "kda": 1.8807339449541285, 
                        "winRate": 0.3333333333333333
                    }, 
                    {
                        "id": 9,
                        "name": "Fiddlesticks",
                        "cs": 72.5, 
                        "lastPlayed": 260.99735901259317, 
                        "games": 2, 
                        "kda": 1.1666666666666667, 
                        "winRate": 0.0
                    }, 
                    {
                        "id": 13,
                        "name": "Ryze",
                        "cs": 189.8, 
                        "lastPlayed": 238.80323647633585, 
                        "games": 5, 
                        "kda": 1.96, 
                        "winRate": 0.4
                    }, 
                    {
                        "id": 15,
                        "name": "Sivir",
                        "cs": 200.0, 
                        "lastPlayed": 249.7022021562298, 
                        "games": 4, 
                        "kda": 2.6818181818181817, 
                        "winRate": 0.25
                    }, 
                    {
                        "id": 16,
                        "name": "Soraka",
                        "cs": 26.0, 
                        "lastPlayed": 266.4662332822921, 
                        "games": 1, 
                        "kda": 3.3333333333333335, 
                        "winRate": 1.0

                    }, 
                    {
                        "id": 22,
                        "name": "Ashe",
                        "cs": 210.5, 
                        "lastPlayed": 216.72126017994907, 
                        "games": 2, 
                        "kda": 1.8823529411764706, 
                        "winRate": 0.0

                    }, 
                    {
                        "id": 25,
                        "name": "Morgana",
                        "cs": 31.9375, 
                        "lastPlayed": 143.8098606401713, 
                        "games": 16, 
                        "kda": 2.4, 
                        "winRate": 0.3125

                    }, 
                    {
                        "id": 27,
                        "name": "Singed",
                        "cs": 185.0, 
                        "lastPlayed": 252.28552673295843, 
                        "games": 1, 
                        "kda": 0.7894736842105263, 
                        "winRate": 0.0
                    },
                    {
                        "id": 222,
                        "name": "Jinx",
                        "cs": 203.53571428571428, 
                        "lastPlayed": 87.93155038552446, 
                        "games": 28, 
                        "kda": 2.627450980392157, 
                        "winRate": 0.5
                    }, 
                    {
                        "id": 103,
                        "name": "Ahri",
                        "cs": 144.33333333333334, 
                        "lastPlayed": 252.3947806165574, 
                        "games": 3, 
                        "kda": 1.6470588235294117, 
                        "winRate": 0.0
                    }, 
                    {
                        "id": 115,
                        "name": "Ziggs",
                        "cs": 212.33333333333334, 
                        "lastPlayed": 105.1744298691088, 
                        "games": 12, 
                        "kda": 3.75, 
                        "winRate": 0.5833333333333334
                    }, 
                    {
                        "id": 117,
                        "name": "Lulu",
                        "cs": 138.4781954887218, 
                        "lastPlayed": 25.313055624069342, 
                        "games": 665, 
                        "kda": 4.3467213114754095, 
                        "winRate": 0.5413533834586466
                    }, 
                    {
                        "id": 120,
                        "name": "Hecarim",
                        "cs": 149.5, 
                        "lastPlayed": 261.898392979019, 
                        "games": 6, 
                        "kda": 0.918918918918919, 
                        "winRate": 0.0
                    },
                    {
                        "id": 28,
                        "name": "Evelynn",
                        "cs": 84.0, 
                        "lastPlayed": 317.75747620918986, 
                        "games": 1, 
                        "kda": 6.0, 
                        "winRate": 1.0
                    }, 
                    {
                        "id": 36,
                        "name": "Dr. Mundo",
                        "cs": 203.80769230769232, 
                        "lastPlayed": 186.2999912751314, 
                        "games": 26, 
                        "kda": 3.3846153846153846, 
                        "winRate": 0.5384615384615384
                    }, 
                    {
                        "id": 37,
                        "name": "Sona",
                        "cs": 18.923076923076923, 
                        "lastPlayed": 113.3128459714907, 
                        "games": 13, 
                        "kda": 3.0576923076923075, 
                        "winRate": 0.5384615384615384
                    }, 
                    {
                        "id": 38,
                        "name": "Kassadin",
                        "cs": 102.0, 
                        "lastPlayed": 252.20741155365062, 
                        "games": 1, 
                        "kda": 0.6666666666666666, 
                        "winRate": 0.0
                    }, 
                    {
                        "id": 39,
                        "name": "Irelia",
                        "cs": 156.0, 
                        "lastPlayed": 283.5534713773827, 
                        "games": 4, 
                        "kda": 1.2857142857142858, 
                        "winRate": 0.0
                    }, 
                    {
                        "id": 40,
                        "name": "Janna",
                        "cs": 15.2, 
                        "lastPlayed": 186.7313786945418, 
                        "games": 10, 
                        "kda": 2.5344827586206895, 
                        "winRate": 0.5
                    }, 
                    {
                        "id": 42,
                        "name": "Corki",
                        "cs": 147.5, 
                        "lastPlayed": 238.6327521864906, 
                        "games": 2, 
                        "kda": 1.2352941176470589, 
                        "winRate": 0.0
                    }                         
                ];
//                    for(var i in data.data){
//
//                        $scope.champInfo.push(data.data[i]);                 
//                    }                  
                    $scope.loadingPagination.show = true;
                    $scope.loadingPagination.pageIndex = 1;
                    $scope.loadingPagination.maxIndex = Math.round($scope.champInfo.length/10);
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
            $scope.order = '-winRate';
            $scope.reverse = false;
            $scope.setSort = function(id){
                if($scope.reverse === false && $scope.order === id){
                     $scope.reverse = true;
                }
                else if($scope.reverse === true && $scope.order === id){
                     $scope.reverse = false;
                }
                else{
                     $scope.reverse = false;
                     $scope.order = id;
                }
                //$scope.$digest();
            };
            
            $scope.isSort = function(id){
                return $scope.order === id; 
            };
     
            
        }
    };
});

