// app/services/AuthService.js

/**
 * Authentification service: in charge of the auth with Firebase
 **/

angular.module('planner').factory('AuthService', AuthService);

function AuthService($firebaseAuth, $rootScope) {
    var AuthService = {}

    AuthService.ref = new Firebase("https://planner31.firebaseio.com/")
    AuthService.auth = $firebaseAuth(AuthService.ref)

    AuthService.requireAuth = function() {
      return AuthService.auth.$requireAuth()
    }

    AuthService.signup = function(email, password, then) {
        this.auth.$createUser({
            email: email,
            password: password
        }).then(function(userData) {
            then(null, userData)
        }).catch(function(error) {
            then(error, null)
        })
    }

    AuthService.login = function(email, password, then) {
        this.auth.$authWithPassword({
            email: email,
            password: password
        }).then(function(userData) {
            then(null, userData)
        }).catch(function(error) {
            then(error, null)
        })
    }

    AuthService.logout = function() {
        this.auth.$unauth()
    }

    AuthService.auth.$onAuth(function(authData) {
        $rootScope.$broadcast('onAuth', {
            data: authData
        })
    })
    return AuthService
}
