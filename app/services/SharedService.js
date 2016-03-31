angular.module('planner').factory('SharedService', SharedService);


function SharedService ($rootScope) {
  var SharedService = {};

  SharedService.sharedData = false

  SharedService.updateCurrentSchedule = function(schedule) {
    this.currentSchedule = schedule
    $rootScope.$broadcast('SharedService')
  }

  return SharedService;
}
