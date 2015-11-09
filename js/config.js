// configuring our routes 
// =============================================================================
app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    //route to show the main page
    //base page
    .state('base',{
        url: '/base',
        templateUrl: 'templates/base.html',
        controller: 'formController'
    })
    .state('base.home', {
        url: '/baseHome',
        template: '<lol-home></lol-home>'
    })
    .state('base.champions', {
        url: '/baseChampions',
        template:'<lol-champions></lol-champions>'
    })
    .state('base.items', {
        url: '/baseItems',
        template: '<lol-items></lol-items>'
    })
    .state('base.rank', {
        url: '/baseRank',
        template: '<lol-rank></lol-rank>'
    })
    .state('base.live',{
        url:'/baseLive',
        template: '<lol-live></lol-live>'
    })
    .state('base.champions.general',{
        url:'/baseChampionGeneral',
        template: '<lol-champions-general></lol-champions-general>'
    })
    .state('base.champions.champions',{
        url:'/baseChampionChampions',
        template: '<lol-champions-champions></lol-champions-champions>'
    })
    .state('base.champions.charts',{
        url:'/baseChampionCharts',
        template: '<lol-champions-charts></lol-champions-charts>'
    })
    .state('base.champions.match',{
        url:'/baseChampionMatch',
        template: '<lol-champions-match></lol-champions-match>'
    })
    ;
    $urlRouterProvider.otherwise('/base/baseHome');
    
});