var app = angular.module("BeerApp");



app.controller("BeerController", ["$scope", "$http", "DiaryService", function ($scope, $http, DiaryService) {
    $scope.beers = [];

    // define and immediately invoke this function when the
    // page loads to get the list of beers from the server
    (function getBeers() {
        DiaryService.getBeers().then(function (beers) {
            $scope.beers = beers;
        });
    })();



    $scope.editBeer = function (input){
      DiaryService.editBeer(input).then(function(response){
        console.log(response);
      })
    }

}]);
