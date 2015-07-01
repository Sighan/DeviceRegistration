'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.stateChangeInterceptor
 * @description
 * # stateChangeInterceptor
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
  .factory('stateChangeInterceptor', ['$rootScope', '$injector', 'authService', 'messageService',
     function ($rootScope, $injector, authService, messageService) {
       return function(event, toState, toParams, fromState, fromParams) {
          if (typeof toState !== 'undefined') {
            if (typeof toState.data !== 'undefined') {

              messageService.printAndClear();

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
