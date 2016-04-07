// app/controllers/Router.js

/**
  * Router of the app
**/

angular.module('planner').config(Router);

function Router($routeProvider) {
  $routeProvider
  .when('/planner', {
    templateUrl: 'views/planner.html',
    controller: 'PlannerCtrl',
    controllerAs: 'plannerCtrl'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'loginCtrl'
  })
  .otherwise({
    redirectTo: '/planner'
  })
}
