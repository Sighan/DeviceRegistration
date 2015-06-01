'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.authService
 * @description
 * # requestInterceptor
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
     .factory('requestInterceptor', ['$q', '$injector', '$localStorage', function ($q, $injector, $localStorage) {
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
                     $injector.get('$state').transitionTo('access.login');
                 }
                 return $q.reject(response);
             }
         };
     }]);
