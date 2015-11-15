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
        },
        controller:function($scope,getApi){
            getApi.getCharts().success(function(data){
                $scope.chartsData = data;
                //$scope.loadMap($scope.chartsData.heatMaps);
            });
            
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
                var gridSize = 4,
                    xAxis = 0,
                    yAxis = 0,
                    h = 4,
                    w = 4,
                    rectPadding = 60;

                var colorLow = 'green', colorMed = 'yellow', colorHigh = 'red', colorExtremeHigh = 'purple';

                var margin = {top: 20, right: 80, bottom: 30, left: 50},
                    width = 596 - margin.left - margin.right,
                    height = 596 - margin.top - margin.bottom;

                var colorScale = d3.scale.linear()
                     .domain([0, 1, 2, 3])
                     .range([colorLow, colorMed, colorHigh,colorExtremeHigh]);

                var svg = d3.select("#chartHeatmap").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                
                for(var i=0; i< data.killContributions[0].length; i++){
                    $scope.start = 0;
                    var heapMap = svg.selectAll("#chartHeatmap")
                    .data(data.killContributions[0][i], function(d) {return d; })
                    .enter().append("svg:rect")
                    .attr("x",function(d){return $scope.start+=4;})
                    .attr("y", function(d) { return (i+1)*4; })
                    .attr("width", function(d) { return w; })
                    .attr("height", function(d) { return h; })
                    .style("fill", function(d) { return colorScale(d); });
                }
            }
            
        }
    }
});