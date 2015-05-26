'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.stateChangeInterceptor
 * @description
 * # stateChangeInterceptor
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
  .factory('stateChangeInterceptor', ['$rootScope', '$injector', 'authService', function ($rootScope, $injector, authService) {
     return function(event, toState, toParams, fromState, fromParams) {
        var requiresLogin = toState.data.requiresLogin;
        if (requiresLogin && !authService.hasValidToken()) {
          event.preventDefault();
          $injector.get('$state').transitionTo('access.login');
        }
     };
  }]);
