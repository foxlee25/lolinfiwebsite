/**
*charts
*/
app.directive('lolChampionsCharts',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/general/charts.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
			scope.chartOptions={"gameType":"Ranked Solo","role":"TOP","performance":"Game Length"};
        },
        controller:function($scope, RiotSummonerApi){
			// use the mock data from static json
            RiotSummonerApi.getInfo('charts')
                .success(function(data){
                    $scope.chartsData = data;
                    $scope.loadChart();
                    $scope.loadMap($scope.chartsData.heatMaps);
                })
                .error(function(e){
                    console.log(e + "can't get summoner chart");
                });;
			
			$scope.loadChart = function(){
				
				$('#chartLinemap').highcharts({
				  	credits: {
                        enabled: false
                    },
					chart:{
						backgroundColor:'rgba(255, 255, 255, 0)'
					},
					xAxis: {
						categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
							'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
					},
					yAxis: {
						plotLines: [{
							value: 0,
							width: 1,
							color: '#808080'
						}]
					},
					series: [{
						data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
					}]
				});
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
