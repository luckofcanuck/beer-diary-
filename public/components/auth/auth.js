var app = angular.module("BeerApp.Auth", []);

app.config(["$routeProvider", function ($routeProvider){
  $routeProvider
    .when("/signup", {
      templateUrl: "components/auth/signup/signup.html",
      controller: "SignupController"
    })
    .when("/login", {
        templateUrl: "components/auth/login/login.html",
        controller: "LoginController"
    })
    .when("/logout", {
        controller: "LogoutController",
        template: ""
    })
}])

app.config(["$httpProvider", function ($httpProvider){
  $httpProvider.interceptors.push("AuthInterceptor");
}])
