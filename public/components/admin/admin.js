var app = angular.module("BeerApp");

app.controller("adminController", ["$scope", "$location", "UserService", "DiaryService", "$http", function($scope, $location, UserService, DiaryService, $http){
  UserService.isUserIn();

  if (UserService.currentUser.admin === false){
    alert("You are not authorized to view this page.");
    $location("/")
  } else {
    console.log("you good")
  }

  $scope.beers = [];
  $scope.users = [];


  $scope.getBeers = function(){
    $scope.users = [];
    return $http.get("/api/adBeer/").then(function(response){
      $scope.beers = response.data;
    })
  }

  $scope.deleteBeer = function(beer, index){
    return $http.delete("/api/adBeer/" + beer._id).then(function(response){
      console.log(response);
      $scope.beers.splice(index, 1);
    })
  }

  $scope.editBeer = function(beer){
    DiaryService.editBeer(beer).then(function(response){
      console.log(response);
    })
  }



  $scope.getUsers = function(){
    $scope.beers = [];
    return $http.get("api/admin/").then(function(response){
      $scope.users = response.data;
    })
  }

  $scope.editUser = function(user){
    return $http.put("/api/admin/" + user._id, user).then(function(response){
      console.log("success");
    })
  }

  $scope.deleteUser = function(user, index){
    return $http.delete("/api/admin/" + user._id).then(function(response){
      console.log("success");
      $scope.users.splice(index, 1);
    })
  }

}])
