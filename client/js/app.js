// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
var app=angular.module('lolInfi', ['ngAnimate','ngSanitize', 'ui.router']);

// our controller for the form
// =============================================================================
app.controller('formController', function($scope, facebookService) {
	
//	var bgImages = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
//
//	var backstretchArray =[]
//	 for(var i=0;i<bgImages.length;i++){
//		 backstretchArray.push("images/" + bgImages[i])
//	}
//
//	$("#homeBg").backstretch(backstretchArray, {
//			fade: 750,
//			duration: 4000
//	});

    $scope.config = {"searchToggle":true,"url":"HOME"};
    $scope.fbLogin = {"btn": true, "image": false, "imageUrl": "", "name": ""};
    
    /**
    * initialize twitch api
    */
    Twitch.init({clientId: '3i5rtey5q5ipvmjmctz5s7lbf0m2h0g'}, function(error, status) {
        console.log("!!!!!twtich init called");
        console.log(error+"error");
        console.log(JSON.stringify(status)+"status");
      if (error) {
        // error encountered while loading
        console.log(error);
        console.log("twitch api load fail");
      }
      // the sdk is now loaded
    });
      
    /**
    * get called from checkLoginState in index.html script
    */
    $scope.statusChangeCallback = function(response) {
        if (response.status === 'connected') {
            facebookService.getFaceBookInfo().then(function(response){
                $scope.fbLogin = {"btn": false, 
                                  "image": true, 
                                  "imageUrl": "http://graph.facebook.com/" +
                                  response.id +
                                  "/picture?type=normal", 
                                  "name": response.name};
            });
        } else if (response.status === 'not_authorized') {

        } else {

        }
    };
    
});
