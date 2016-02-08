/**
*champion detail
*/
app.directive('lolChampiondetail',function(){
    function load_script() {
        var s = document.createElement('script');
        s.src = "js/simple-slider.js";
        document.head.appendChild(s);
    }

    return{
        restrict:'E',
        templateUrl:'templates/base/championDetail.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
            load_script();
            $("#data-slider")
            .each(function () {
                var input = $(this);
                $("<span>").addClass("output").insertAfter($(this));
            })
            .bind("slider:ready slider:changed", function (event, data) {
                $(this)
                .nextAll(".output:first")
                .html(data.value.toFixed() + "-18");
            });
        },
        controller:function($scope,redirect,championDetail){
			 championDetail.getChampDetail("champion_detail")
				.success(function(data){
				 	data.spells.map(function(value){
						value.image.full = value.image.full.replace(/([A-Z])/g, ' $1').trim();
						return value;
					});
					$scope.detail = data;
			     })
                .error(function(e){
                    console.error(e + " can't get champion detail");
                });
        }
    };
});
