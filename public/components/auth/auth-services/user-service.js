app.service("UserService", ["$http", "$location", "TokenService", function ($http, $location, TokenService){
  var self = this;
  this.currentUser = {};
  this.admin = false;

  this.signup = function (user) {
    return $http.post("/auth/signup", user);
  };

  this.login = function (user) {
    return $http.post("/auth/login", user).then(function(response){
      TokenService.setToken(response.data.token);
      self.currentUser = response.data.user;
      return response;
    });
  };

  this.isUserIn = function(){
    return $http.get("/api/user").then(function(response){
      console.log(response);
      self.currentUser = response.data.user;
    })
  }

  this.logout = function (){
    TokenService.removeToken();
    self.admin = false;
    $location.path("/");
  };

  this.isAuthenticated = function (){
    return !!TokenService.getToken();
  };

  this.changePassword = function (newPassword) {
    console.log(newPassword);
    return $http.post("/auth/change-password", {newPassword: newPassword}).then(function(response){
      alert("Password change successful.");
      return response.data;
    }, function (response){
      alert("Problem with the server...");
    });
  }

}]);
