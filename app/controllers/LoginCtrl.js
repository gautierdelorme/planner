// app/controllers/LoginCtrl.js

/**
  * Login controller of the app
**/

angular.module('planner').controller('LoginCtrl', LoginCtrl);

function LoginCtrl(AuthService, NotificationsService) {
  var vm = this;

  vm.user = {
    email: "",
    password: ""
  }

  vm.login = function() {
    AuthService.login(vm.user.email, vm.user.password, function(error, res) {
      if (error) {
        NotificationsService.error("Error during logging. Please verify your password.");
      }
    })
  }

  vm.signup = function() {
    AuthService.signup(vm.user.email, vm.user.password, function(error, res) {
      if (error) {
        NotificationsService.error("Error during signing up. Please try again.");
      }
    })
  }
}
