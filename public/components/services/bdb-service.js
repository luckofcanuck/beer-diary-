var app = angular.module("BeerApp");

app.service("bdbService", ["$http", function ($http){



  this.findABeer = function (input){
    return $http.get("/bdb/" + input).then(function(response){
      return response;
    })
  }

}])
