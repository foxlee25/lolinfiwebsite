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
                  console.log(123123);
                $scope.video = videoPlayer.getVideo();
                var index = $scope.video.channel.url.lastIndexOf("/")+1;
                $scope.url = $scope.video.channel.url.substring(0,index)+"widgets/live_embed_player.swf?channel="+$scope.video.channel.url.substring(index+1); 
//                  var isChrome = !!window.chrome && !!window.chrome.webstore;
//                  console.log(isChrome);
//                  if(isChrome){
//                      
//                  }
                  
//                  console.log($sce.trustAsResourceUrl($scope.url));
                return $sce.trustAsResourceUrl($scope.url);
              };
            
            
        }
    };
});
