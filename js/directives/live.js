/**
*live
*/
app.directive('lolLive',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/live.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
			scope.index = 1;
			$("body").css("background-image","url('../images/otherbg.jpg')");
            //get twitch lol game play list
            Twitch.api({method: 'streams', params: {game:'League of Legends', limit:21} }, function(error, list) {
              console.debug(JSON.stringify(list));
              scope.twitchPlayList = list;
              //not inisde angular scope need to refresh
              scope.$apply();
            });
        },
        controller:function($scope,redirect,videoPlayer){

			
			$scope.loadPage = function(index){
				var offset = index*21;
				$scope.index = index;
				Twitch.api({method: 'streams'
							, params: {game:'League of Legends'
							, limit:21, offset: offset} }
				, function(error, list) {
				  console.debug(JSON.stringify(list));
				  $scope.twitchPlayList = list;
				  window.scrollTo(0,0);
				  //not inisde angular scope need to refresh
				  scope.$apply();
				});
			}
				
						   

            $scope.playVideo = function(info){
                videoPlayer.setVideo(info);
                redirect("/base/basePlayer");   
            }
        }
    }
});