angular.module('planner').config(Router);

function Router($routeProvider) {
  $routeProvider
  .when('/planner', {
    templateUrl: 'views/planner.html',
    controller: 'PlannerCtrl',
    controllerAs: 'planner'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .otherwise({
    redirectTo: '/planner'
  })
}
