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
			$("body").css("background-image","url('../images/otherbg.jpg')");
        },
        controller:function($scope,redirect,videoPlayer){
            //get twitch lol game play list
            Twitch.api({method: 'streams', params: {game:'League of Legends', limit:20} }, function(error, list) {
              console.debug(JSON.stringify(list));
              $scope.twitchPlayList = list;
              //not inisde angular scope need to refresh
              $scope.$apply();
            });

            $scope.playVideo = function(info){
                videoPlayer.setVideo(info);
                redirect("/base/basePlayer");   
            }
        }
    }
});