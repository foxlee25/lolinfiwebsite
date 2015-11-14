/**
*home
*/
app.directive('lolHome',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/home.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
            scope.championPage = {"id":1};
        },
        controller:function($scope,redirect){
            $scope.searchSummoner = function(input){
                $scope.config.searchToggle = false;
                redirect("/base/baseHome/baseChampionGeneral");
            }
            
            $scope.selectChampionPage = function(id){
                $scope.championPage.id = id;
                switch($scope.championPage.id){
                    case 1:
                        redirect("/base/baseHome/baseChampionGeneral");
                        break;
                    case 2:
                        redirect("/base/baseHome/baseChampionChampions");
                        break;
                    case 3:
                        redirect("/base/baseHome/baseChampionCharts");
                        break;
                    case 4:
                        redirect("/base/baseHome/baseChampionMatch");
                        break;
                    default:
                        redirect("/base/baseHome/baseChampionGeneral");
                }
                
            }
        }
    }
});