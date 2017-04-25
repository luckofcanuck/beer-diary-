var app = angular.module("BeerApp");

app.controller("ProfileController", ["$scope", "UserService", function ($scope, UserService) {
    $scope.userService = UserService;
    UserService.isUserIn();
    $scope.changePassword = function (passwords) {
        if (passwords.newPassword === passwords.newPasswordRepeat) {
            UserService.changePassword(passwords.newPassword).then(function(response) {
                $scope.passwords = {};
            })
        } else {
            alert("The two passwords didn't match");
        }
    }
}]);
