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
            controllerAs: 'plannerCtrl',
            resolve: {
                "currentAuth": ["AuthService", function(AuthService) {
                    return AuthService.requireAuth()
                }]
            }
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
