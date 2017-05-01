var app = angular.module("BeerApp");

app.controller("adminController", ["$scope", "$location", "UserService", function($scope, $location, UserService){
  if (UserService.admin === false){
    alert("You are not authorized to view this page.");
    $location.path("/home");
  }

  $scope.test = "hello"


}])
