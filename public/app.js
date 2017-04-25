var app = angular.module("BeerApp", ["ngRoute", "BeerApp.Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html"
        })
        .when("/beers", {
            templateUrl: "components/beers/beers.html",
            controller: "BeerController"
        })
        .when("/profile", {
            templateUrl: "components/profile/profile.html",
            controller: "ProfileController"
        })
});
