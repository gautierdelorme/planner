// app/controllers/LoginCtrl.js

/**
  * Login controller of the app
**/

angular.module('planner').controller('LoginCtrl', LoginCtrl);

function LoginCtrl(AuthService) {
  var vm = this;

  vm.user = {
    email: "",
    password: ""
  }

  vm.login = function() {
    console.log(vm.user.email)
    AuthService.login(vm.user.email, vm.user.password, function(error, res) {
      if (error) {
        console.log("error on login: "+error)
      } else {
        console.log("okay")
      }
    })
  }
  vm.signup = function() {
    AuthService.signup(vm.user.email, vm.user.password, function(error, res) {
      if (error) {
        console.log("error on signup: "+error)
      } else {
        console.log("okay")
      }
    })
  }
}
