(function() {
    'use strict';

    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var compress = require('compression');
    var cors = require('cors');
    var logger = require('morgan');
    var port = 8080;
    var routes;
    var lolStaticApi;
    var lolSummonerApi;

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(compress());
    app.use(cors());
    app.use(logger('dev'));

    lolStaticApi = require('./dao/lol_static_api');
    console.log(lolStaticApi);
    lolSummonerApi = require('./dao/lol_summoner_api');
    routes = require('./route/index')(app, lolStaticApi, lolSummonerApi);


    console.log('about to launch node server');

    app.get('/ping',function(req, res){
        console.log(req.body);
        res.send('pong');
    });

    app.use(express.static('../client/'));
    app.use('/*', express.static('../client/index.html'));

    app.listen(port,function(){
        console.log('express module listening on port'+port);
    });
}());



