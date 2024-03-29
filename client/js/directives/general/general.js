/**
*general
*/
app.directive('lolChampionsGeneral',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/general/general.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
        },
        controller:function($scope, RiotApi, redirect, RiotSummonerApi, Cache){
//            getApi.getGeneral().success(function(data){
//                $scope.championGeneral = data;
//            });
			$scope.stats = {wRate: null, kda: null, cs: null, games: "null"};
            if(RiotSummonerApi.getSummonerId() === null){
                if(Cache.get("SummonerId")){
                    RiotSummonerApi.setSummonerId(Cache.get("SummonerId"));
                }else{
                    redirect("/base/baseHome");
                }
            }

			RiotSummonerApi.getInfo('recentGames')
                .success(function(data){
//                console.log(JSON.stringify(data));
                $scope.roles = ['TOP', 'JUN', 'MID', 'ADC', 'SUP'];
                
                })
                .error(function(e){
                    console.error(e + " can't get match detail");
                });

			RiotSummonerApi.getInfo('general')
                .success(function(data){
//                    console.log(JSON.stringify(data));
					$scope.general = data;
				    // debugger;
					if($scope.general.champions != null &&
					   Array.isArray($scope.general.champions)){
						var totalGamePlayed = 0;
						var totalGameWon = 0;
						var totalCreepScore = 0;
						var totalKill = 0;
						var totalAssist = 0;
						var totalDeath = 0;
						$scope.general.champions.map(function(champ){
							totalGamePlayed+=
								champ.stats.totalSessionsPlayed;
							totalGameWon+=
								champ.stats.totalSessionsWon;
							totalCreepScore+=
								champ.stats.totalMinionKills;
							totalKill+=
								champ.stats.totalChampionKills;
							totalAssist+=
								champ.stats.totalAssists;
							totalDeath+=
								champ.stats.totalDeathsPerSession*champ.stats.totalSessionsPlayed;
						});
						$scope.stats.wRate = parseInt(totalGameWon*100/totalGamePlayed);
						$scope.stats.kda = parseInt((totalKill + totalAssist)/totalGamePlayed);
						$scope.stats.cs = parseInt(totalCreepScore/totalGamePlayed);
						$scope.stats.games = totalGamePlayed;
					}
			     })
                .error(function(e){
                    console.error(e + " can't get summoner champion");
                });
                
            

            (function init_summonerGeneral_spiderChart(){
                $('.last20GamesSummarySpiderChart').highcharts({
                    credits: {
                        enabled: false
                    },
                    title:{
                      text: null
                    },
                    chart: {
                        polar: true,
                        type: 'line',
                        y:-100,
                        backgroundColor:'transparent'
                    },       
                    pane: {
                        size: '65%',
                    },
                    xAxis: {
                        categories: ['Damage', 'Gold', 'Team Fight', 'Vision Control',
                                'Survival'],
                        tickmarkPlacement: 'on',
                        labels: {
                            style: {
                                color: '#cccccc',
                                fontWeight: 'bold',
                                fontSize:'12px'
                            }
                        },
                        lineWidth: 0
                    },
                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0,
                        max: 3,
                        tickInterval:1,
                        labels: {
                            enabled: false
                        },
                    },
                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
                    },
                    legend: {
                         enabled: false
                    },
                    series: [{
                        name: 'Score',
                        type: 'area',
                        color: 'rgba(119,176,206,1)',
                        data: [1.5, 1.9, 2.1, 2.7, 2.3],
                        pointPlacement: 'on', 
                        fillColor: 'rgba(119,176,206,0.15)'
                    }]
                });
            }());
        }
    };
});
