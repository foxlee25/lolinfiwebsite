// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
var app=angular.module('lolInfi', ['ngAnimate', 'ui.router']);

// our controller for the form
// =============================================================================
app.controller('formController', function($scope,$location,$http) {
    var bgImages = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
    
    var backstretchArray =[]
     for(var i=0;i<bgImages.length;i++){
         backstretchArray.push("images/" + bgImages[i])
    }
    
    $.backstretch(backstretchArray, {
            fade: 750,
            duration: 4000
    });
    
    
});