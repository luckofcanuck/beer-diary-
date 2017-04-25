var app = angular.module("BeerApp.Auth");

app.controller("LogoutController", ["UserService", function (UserService){
  UserService.logout();
}])
