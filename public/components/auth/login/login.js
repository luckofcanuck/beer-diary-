var app = angular.module("BeerApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            if (response.data.user.admin === true){
              UserService.admin = true;
            } else {
              UserService.admin = false;
            };
            $location.path("/beers");
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);
