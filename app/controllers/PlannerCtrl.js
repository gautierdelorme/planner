// app/controllers/PlannerCtrl.js

/**
  * Planner controller: in charge of the planner smartness
**/

angular.module('planner').controller('PlannerCtrl', PlannerCtrl);

function PlannerCtrl(EventService, SharedService) {
  var vm = this;
  vm.schedules = [
    {
      id:'1',
      time:'8h - 10h',
    },
    {
      id:'2',
      time:'10h - 12h',
    },
    {
      id:'3',
      time:'14h - 16h',
    },
    {
      id:'4',
      time:'16h - 18h',
    }
  ]
  vm.events = EventService.events
  vm.removeEvent = function(event) {
    EventService.removeEvent(event)
  }
  vm.tabChanged = function(schedule){
    SharedService.updateCurrentSchedule(schedule.id)
  }
}
