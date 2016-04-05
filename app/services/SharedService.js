// app/services/SharedService.js

/**
  * Shared service: in charge of sharing datas between controllers
**/

angular.module('planner').factory('SharedService', SharedService);


function SharedService ($rootScope) {
  var SharedService = {};

  SharedService.currentSchedule = false

  SharedService.updateCurrentSchedule = function(schedule) {
    this.currentSchedule = schedule
    $rootScope.$broadcast('SharedService')
  }

  return SharedService;
}
