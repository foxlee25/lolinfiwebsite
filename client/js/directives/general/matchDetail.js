/**
*match detail
*/
app.directive('lolChampionsMatchDetail',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/general/matchDetail.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
			// $("html").css("background","url('images/otherPageBase.jpg')");            
        },
        controller:function($scope, RiotSummonerApi, Cache, redirect){
            if(RiotSummonerApi.getMatchId() === null){
                if(Cache.get("MatchId")){
                    RiotSummonerApi.setMatchId(Cache.get("MatchId"));
                }else{
                    redirect("/base/baseHome");
                }
            }
			RiotSummonerApi.getInfo('matchdetail')
                .success(function(data){
				    $scope.match = data;
                }).error(function(e){
                    console.log(e + "can't get summoner match details");
                });
            }
        };
    }
);
