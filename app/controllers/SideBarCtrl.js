// app/controllers/SideBarCtrl.js

/**
  * SideBar controller: in charge of the sidebar responsivness
**/

angular.module('planner').controller('SideBarCtrl', SideBarCtrl);

function SideBarCtrl(EventService, SharedService, $scope) {
  var vm = this;
  vm.title = 'PLANNER'
  vm.currentSchedule = false
  vm.week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ]
  vm.addEvent = function(){
    EventService.addEvent(vm.currentSchedule)
  }

  $scope.$on('SharedService', function () {
    vm.currentSchedule = SharedService.currentSchedule
  });
}
