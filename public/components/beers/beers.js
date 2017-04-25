var app = angular.module("BeerApp");

app.service("BeerService", ["$http", function ($http) {
    this.getBeers = function () {
        return $http.get("/api/beer").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.savebeer = function (beer) {
        return $http.post("/api/beer", beer).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
}]);

app.controller("BeerController", ["$scope", "$http", "BeerService", function ($scope, $http, BeerService) {
    $scope.beer = {};
    $scope.beers = [];

    // define and immediately invoke this function when the
    // page loads to get the list of beers from the server
    (function getBeers() {
        BeerService.getBeers().then(function (beers) {
            $scope.beers = beers;
        });
    })();
}]);
