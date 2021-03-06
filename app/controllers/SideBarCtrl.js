// app/controllers/SideBarCtrl.js

/**
  * SideBar controller: in charge of the sidebar responsivness
**/

angular.module('planner').controller('SideBarCtrl', SideBarCtrl);

function SideBarCtrl(EventService, SharedService, AuthService, $scope, $location) {
  var vm = this;
  vm.title = 'PLANNER'
  vm.currentSchedule = false
  vm.userData = null
  vm.week = [
    'Monday',
    'Monday1',
    'Monday2',
    'Monday3',
    'Monday4',
    'Monday5',
    'Monday6',
    'Monday7',
    'Monday8',
    'Monday9',
    'Monday10',
    'Monday11',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ]
  vm.addEvent = function(){
    EventService.addEvent(vm.currentSchedule)
  }

  vm.logout = function() {
    AuthService.logout()
    $location.path('/')
  }

  $scope.$on('SharedService', function () {
    vm.currentSchedule = SharedService.currentSchedule
  })

  $scope.$on('onAuth', function (event, args) {
    vm.userData = args.data
  })
}
