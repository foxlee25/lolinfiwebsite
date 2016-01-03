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
    .state('base.player',{
        url:'/basePlayer',
        template:'<lol-player></lol-player>'
    })
	.state('base.champDetail',{
		url:'/baseChampDetail',
		template:'<lol-championdetail></lol-championdetail>'
	})
    .state('base.home.general',{
        url:'/baseChampionGeneral',
        template: '<lol-champions-general></lol-champions-general>'
    })
    .state('base.home.champions',{
        url:'/baseChampionChampions',
        template: '<lol-champions-champions></lol-champions-champions>'
    })
    .state('base.home.charts',{
        url:'/baseChampionCharts',
        template: '<lol-champions-charts></lol-champions-charts>'
    })
    .state('base.home.match',{
        url:'/baseChampionMatch',
        template: '<lol-champions-match></lol-champions-match>'
    })
     .state('base.home.matchDetail',{
        url:'/baseChampionMatchDetail',
        template: '<lol-champions-match-detail></lol-champions-match-detail>'
    })
    ;
    $urlRouterProvider.otherwise('/base/baseHome');
    
});