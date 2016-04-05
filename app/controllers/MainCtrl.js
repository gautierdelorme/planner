// app/controllers/MainCtrl.js

/**
  * Main controller of the app
**/

angular.module('planner').controller('MainCtrl', MainCtrl);

function MainCtrl($mdSidenav) {
  var vm = this;
  vm.toggleSideMenu = function() {
    $mdSidenav('left').toggle();
  }
}
