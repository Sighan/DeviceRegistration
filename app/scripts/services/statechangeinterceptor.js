'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.stateChangeInterceptor
 * @description
 * # stateChangeInterceptor
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
  .factory('stateChangeInterceptor', ['$rootScope', '$injector', 'authService',
     function ($rootScope, $injector, authService) {
       return function(event, toState, toParams, fromState, fromParams) {
          if (typeof toState !== 'undefined') {
            if (typeof toState.data !== 'undefined') {
              if (toState.data.requiresLogin && !authService.hasValidToken()) {
                event.preventDefault();
                $injector.get('$state').go('access.login');
                return;
              }

              if (toState.data.requiresNotLoggedIn && authService.hasValidToken()) {
                event.preventDefault();
                $injector.get('$state').go('app.devices.all');
                return;
              }
            }
          }
       };
  }]);
