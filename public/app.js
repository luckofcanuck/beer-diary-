var app = angular.module("BeerApp", ["ngRoute", "ngAnimate", "BeerApp.Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"
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
