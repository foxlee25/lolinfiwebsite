/**
*charts
*/
app.directive('lolChampionsCharts',function(){
    function load_script() {
        var s = document.createElement('script');
        s.src = "js/simple-slider.js";
        document.head.appendChild(s);
    }
    
    return{
        restrict:'E',
        templateUrl:'templates/base/general/charts.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
			scope.chartOptions={"gameType":"Ranked Solo","role":"TOP","performance":"Game Length"};
            
            scope.champion = {level: 1};
            load_script();
            $("#data-slider2")
            .each(function () {
                var input = $(this);
                $("<span>").addClass("output").insertAfter($(this));
            })
            .bind("slider:ready slider:changed", function (event, data) {
                $(this)
                .nextAll(".output:first")
                .html(data.value.toFixed() + "-18");
                scope.champion.level = data.value.toFixed();
                scope.$digest();
            });
            
        },
        controller:function($scope, $http, RiotSummonerApi, redirect, Cache){
            if(RiotSummonerApi.getSummonerId() === null){
                if(Cache.get("SummonerId")){
                    RiotSummonerApi.setSummonerId(Cache.get("SummonerId"));
                }else{
                    redirect("/base/baseHome");
                }
            }
			// use the mock data from static json
            RiotSummonerApi.getInfo('charts')
                .success(function(data){
                    $scope.chartsData = data;
                    $scope.loadChart();
                    $scope.loadMap($scope.chartsData.heatMaps);
                })
                .error(function(e){
                    console.log(e + "can't get summoner chart");
                });
			
            $http.get('json/data.json')
                .success(function(res){
                    $scope.chartData = res;
            })
            $http.get('json/data_2.json')
                .success(function(res){
                    $scope.chartData_2 = res;
            })
            $http.get('json/data_3.json')
                .success(function(res){
                    $scope.chartData_3 = res;
            })
            $http.get('json/data_4.json')
                .success(function(res){
                    $scope.chartData_4 = res;
            })
            $http.get('json/data_5.json')
                .success(function(res){
                    $scope.chartData_5 = res;
            })
            $http.get('json/data_6.json')
                .success(function(res){
                    $scope.chartData_6 = res;
            })
            $http.get('json/data_7.json')
                .success(function(res){
                    $scope.chartData_7 = res;
            })
            
            $scope.chartdata = {
                    title: {
                        text: '',
                        x: 20 //center
                    },
				  	credits: {
                        enabled: false
                    },
					chart:{
						backgroundColor:'rgba(255, 255, 255, 0)'
					},
					xAxis: {
//						categories: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60+'],
                        
					},
					yAxis: {
                        title:'',
						plotLines: [{
							value: 0,
							width: 1,
							color: '#808080'
						}],
                        gridLineWidth: 0.3
					},
                    plotOptions: {
                        area: {
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, Highcharts.getOptions().colors[0]], [1,Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                ]
                            },
                            marker: {
                                radius: 2
                            },
                            lineWidth: 1,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null
                        }
                    },
					series: [{
                        type: 'area',
                        showInLegend: false,      
//                        data: $scope.chartData,
                    }]
				}
			$scope.loadChart = function(){
                $scope.chartdata.series[0].data = $scope.chartData;
				$('#chartLinemap').highcharts($scope.chartdata);
			};
            
            $scope.verticalTab = 1;
            $scope.horizentalTab = 1;
            $scope.heatTab = 1;
            $scope.selectTab = function(setTab){
                $scope.verticalTab = setTab;
                if($scope.verticalTab == 1){
                    $scope.chartdata.series[0].data = $scope.chartData;
                    $('#chartLinemap').highcharts($scope.chartdata);
                }else if($scope.verticalTab == 2){
                    $scope.chartdata.series[0].data = $scope.chartData_2;
                    $('#chartLinemap').highcharts($scope.chartdata);
                }else if($scope.verticalTab == 3){
                    $scope.chartdata.series[0].data = $scope.chartData_3;
                    $('#chartLinemap').highcharts($scope.chartdata);
                }else if($scope.verticalTab == 4){
                    $scope.chartdata.series[0].data = $scope.chartData_4;
                    $('#chartLinemap').highcharts($scope.chartdata);
                }else if($scope.verticalTab == 5){
                    $scope.chartdata.series[0].data = $scope.chartData_5;
                    $('#chartLinemap').highcharts($scope.chartdata);
                }
                
            };
            $scope.selectTab_2 = function(setTab){
                $scope.horizentalTab = setTab;
                if($scope.horizentalTab == 2){
                    $scope.chartdata.series[0].data = $scope.chartData_6;
                    $('#chartLinemap').highcharts($scope.chartdata);
                }
                if($scope.horizentalTab == 1){
                    $scope.chartdata.series[0].data = $scope.chartData_7;
                    $('#chartLinemap').highcharts($scope.chartdata);
                }
                
            };
            
            
            $scope.selectTab_3 = function(setTab){
                $scope.heatTab = setTab;
                
                
            };
            $scope.loadMap = function(data){
                
//                var width = 900,
//                height = 500;
//                d3.json("json/charts.json", function(error, charts) {
//                    //assign the 2d array
//                  var heatmap = charts.heatMaps.soloKills[0];
//                  if (error) throw error;
//
//                  var dx = heatmap[0].length,
//                      dy = heatmap.length;
//
//                  // Fix the aspect ratio.
//                  // var ka = dy / dx, kb = height / width;
//                  // if (ka < kb) height = width * ka;
//                  // else width = height / ka;
//
//                  var x = d3.scale.linear()
//                      .domain([0, dx])
//                      .range([0, width]);
//
//                  var y = d3.scale.linear()
//                      .domain([0, dy])
//                      .range([height, 0]);
//
//                  var color = d3.scale.linear()
//                      .domain([0,200])
//                      .range(["#000", "#fff"]);
//
//                  var xAxis = d3.svg.axis()
//                      .scale(x)
//                      .orient("top")
//                      .ticks(20);
//
//                  var yAxis = d3.svg.axis()
//                      .scale(y)
//                      .orient("right");
//
//                  d3.select("#chartHeapmap").append("canvas")
//                      .attr("width", dx)
//                      .attr("height", dy)
//                      .style("width", width + "px")
//                      .style("height", height + "px")
//                      .call(drawImage);
//
//                  var svg = d3.select("#chartHeapmap").append("svg")
//                      .attr("width", width)
//                      .attr("height", height);
//
//                  svg.append("g")
//                      .attr("class", "x axis")
//                      .attr("transform", "translate(0," + height + ")")
//                      .call(xAxis)
//                      .call(removeZero);
//
//                  svg.append("g")
//                      .attr("class", "y axis")
//                      .call(yAxis)
//                      .call(removeZero);
//
//                  // Compute the pixel colors; scaled by CSS.
//                  function drawImage(canvas) {
//                    var context = canvas.node().getContext("2d"),
//                        image = context.createImageData(dx, dy);
//
//                    for (var y = 0, p = -1; y < dy; ++y) {
//                      for (var x = 0; x < dx; ++x) {
//                        var c = d3.rgb(color(heatmap[y][x]));
//                        image.data[++p] = c.r*50;
//                        image.data[++p] = c.g*50;
//                        image.data[++p] = c.b*50;
//                        image.data[++p] = 255;
//                      }
//                    }
//
//                    context.putImageData(image, 0, 0);
//                  }
//
//                  function removeZero(axis) {
//                    axis.selectAll("g").filter(function(d) { return !d; }).remove();
//                  }
//                });


                //height of each row in the heatmap
                //width of each column in the heatmap
                var gridSize = 6,
                    xAxis = 0,
                    yAxis = 0,
                    h = 6,
                    w = 6,
                    rectPadding = 60;

                var colorLow = '#cc99ff', colorMed = '#ff9966', colorHigh = '#ff3300', colorExtremeHigh = '#993300';

                var margin = {top: 10, right: 80, bottom: 30, left: 20},
                    width = 894 - margin.left - margin.right,
                    height = 894 - margin.top - margin.bottom;

                var colorScale = d3.scale.linear()
                     .domain([1, 2, 3, 4])
                     .range([colorLow, colorMed, colorHigh,colorExtremeHigh]);

                var svg = d3.select("#chartHeatmap").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                
                    var heapMap = svg.selectAll("#chartHeatmap")
                    .data(data.deaths, function(d) {return d; })
                    .enter().append("svg:rect")
                    .attr("x",function(d){return (d[0]+1)*6;})
                    .attr("y", function(d) { return (d[1]+1)*6; })
                    .attr("width", function(d) { return w; })
                    .attr("height", function(d) { return h; })
                    .style("fill", function(d) { return colorScale(parseInt(d[2])); });
            };
            
        }
    };
});
