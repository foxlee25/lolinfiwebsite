/**
* map used to keep track of app state
*/
app.factory("State", function(){
    return ({
        "/base/baseHome": 0,
        "/base/baseHome/baseChampionGeneral": 1,
        "/base/baseHome/baseChampionChampions": 2,
        "/base/baseHome/baseChampionCharts": 3,
        "/base/baseHome/baseChampionMatch": 4,
        "/base/baseHome/baseChampionMatchDetail": 5
    });
});