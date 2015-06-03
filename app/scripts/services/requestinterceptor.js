'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.authService
 * @description
 * # requestInterceptor
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
     .factory('requestInterceptor', ['$q', '$injector', '$localStorage', 'messageService', function ($q, $injector, $localStorage, messageService) {
         return {
             'request': function (config) {
                 config.headers = config.headers || {};
                 if ($localStorage.token) {
                     config.headers.Authorization = 'Bearer ' + $localStorage.token;
                 }
                 return config;
             },
             'responseError': function (response) {
                 if (response.status === 401 || response.status === 403) {
                     messageService.logError(response.statusText);
                     $injector.get('$state').go('access.login');
                 }
                 return $q.reject(response);
             }
         };
     }]);
