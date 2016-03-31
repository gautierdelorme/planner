angular.module('planner').controller('PlannerCtrl', PlannerCtrl);

function PlannerCtrl() {
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
}
