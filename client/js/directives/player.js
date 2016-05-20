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
			$("html").css("background","url('images/otherPageBase.jpg')");           
        },
        controller:function($scope,$sce,redirect,videoPlayer){

              $scope.trustSrc = function() {
                //detect if browser is chrome
                $scope.browser = {chrome: false};
                if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
                    $scope.browser.chrome = true;
                } 

                var src = '';
              $scope.video = videoPlayer.getVideo();
              if($scope.browser.chrome){
                src = 'http://player.twitch.tv/?channel='+$scope.video.channel.name+"&html5"; 
              }else{
                var index = $scope.video.channel.url.lastIndexOf("/")+1;
                src = $scope.video.channel.url.substring(0,index)+"widgets/live_embed_player.swf?channel="+$scope.video.channel.url.substring(index+1);
              }
                return $sce.trustAsResourceUrl(src);
              };
            
        }
    };
});
