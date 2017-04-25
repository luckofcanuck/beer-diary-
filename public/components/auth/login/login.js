var app = angular.module("BeerApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            $location.path("/beers");
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);
