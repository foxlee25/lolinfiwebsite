// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
var app=angular.module('lolInfi', ['ngAnimate', 'ui.router']);

// our controller for the form
// =============================================================================
app.controller('formController', function($scope,$location,$http) {
    var bgImages = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
    $scope.config={"searchToggle":true};
    
    var backstretchArray =[]
     for(var i=0;i<bgImages.length;i++){
         backstretchArray.push("images/" + bgImages[i])
    }
    
    $.backstretch(backstretchArray, {
            fade: 750,
            duration: 4000
    });
    
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
        debugger;
        console.log("twitch api load fail");
      }
      // the sdk is now loaded
    });
    
});