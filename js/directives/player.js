/**
*player
*/
app.directive('lolPlayer',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/player.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
        },
        controller:function($scope,$sce,redirect,videoPlayer){
			$("body").css("background-image","url('../images/otherbg.jpg')");
              $scope.trustSrc = function() {
                $scope.video = videoPlayer.getVideo();
                var index = $scope.video.channel.url.lastIndexOf("/")+1;
                $scope.url = $scope.video.channel.url.substring(0,index)+"widgets/live_embed_player.swf?channel="+$scope.video.channel.url.substring(index+1); 
                console.log($scope.url);
                return $sce.trustAsResourceUrl($scope.url);
              }
            
            
        }
    }
});