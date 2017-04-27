var app = angular.module("BeerApp");

app.service("DiaryService", ["$http", function ($http){

  this.getBeers = function () {
      return $http.get("/api/beer").then(function (response) {
          return response.data;
      }, function (response) {
          alert("Error " + response.status + ": " + response.statusText + ". You'll need to create an account or sign in!");
      });
  };

  this.savebeer = function (beer) {
      return $http.post("/api/beer", beer).then(function (response) {
          return response.data;
      }, function (response) {
          alert("Error " + response.status + ": " + response.statusText);
      });
  };


    this.saveBeer = function(input){
      return $http.post("/api/beer", input).then(function(response){
        console.log(response);
        return response;
      })
    }

    this.editBeer = function (input){
      return $http.put("/api/beer/" + input._id, input).then(function(response){
        return response;
      })
    }



}])
