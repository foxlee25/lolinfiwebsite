/**
*champions
*/
app.directive('lolChampions',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/champions.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
            scope.championPage = {};
        },
        controller:function($scope,getApi,redirect){
            $scope.selectChampionPage = function(id){
                $scope.championPage.id = id;
                switch($scope.championPage.id){
                    case 1:
                        redirect("/base/baseChampions/baseChampionGeneral");
                        break;
                    case 2:
                        redirect("/base/baseChampions/baseChampionChampions");
                        break;
                    case 3:
                        redirect("/base/baseChampions/baseChampionCharts");
                        break;
                    case 4:
                        redirect("/base/baseChampions/baseChampionMatch");
                        break;
                    default:
                        redirect("/base/baseChampions/baseChampionGeneral");
                }
                
            }
        }
    }
});