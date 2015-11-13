/**
*general
*/
app.directive('lolChampionsGeneral',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/champions/general.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
        },
        controller:function($scope,getApi){
            getApi.getGeneral().success(function(data){
                $scope.championGeneral = data;
            });
            init_summonerGeneral_spiderChart();
             function init_summonerGeneral_spiderChart(){
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
                        size: '70%'
                    },

                    xAxis: {
                        categories: ['Damage', 'Gold', 'Team Fight', 'Vision Control',
                                'Survival'],
                        tickmarkPlacement: 'on',
                        labels: {
                            style: {
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize:'15px'
                            }
                        },
                        lineWidth: 0
                    },

                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0,
                        max:5,
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
                        data: [1.5, 2, 3, 4.5, 3.5],
                        pointPlacement: 'on'
                    }]

                });
            }
        }
    }
});