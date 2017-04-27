var app = angular.module("BeerApp");

app.controller("HomeController", ["$scope", "bdbService", "DiaryService", function($scope, bdbService, DiaryService){


  $scope.beers = [];
  $scope.moreBeers = [];


  $scope.findABeer = function(input){
    bdbService.findABeer(input)
    .then(function(response){
      $scope.moreBeers = [];
      $scope.beers = response.data.data;
      console.log($scope.beers);
    })
  }

  $scope.moreResults = function(input){
    bdbService.findABeer(input)
    .then(function(response){
      $scope.beers = [];
      $scope.moreBeers = response.data.data;
      console.log($scope.moreBeers);
    })
  }

  $scope.saveBeer = function(input){
    console.log(input)
    DiaryService.saveBeer(input).then(function(response){
      console.log(response);
    })
  }

}])
