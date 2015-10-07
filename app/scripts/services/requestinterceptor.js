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
                 if (typeof($localStorage.token) !== 'undefined') {
                     config.headers.Authorization = 'Token ' + $localStorage.token;
                 }
                 config.headers['Access-Control-Allow-Origin'] = '*';
                 config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
                 config.headers['Access-Control-Allow-Headers'] = 'Content-Type, X-Requested-With';
                 return config;
             },
             'responseError': function (response) {
                 if (response.status === 401 || response.status === 403) {
                     messageService.logError(response.statusText);
                     $injector.get('$state').go('access.login');
                     if (response.status === 401) {
                       delete $localStorage.token;
                     }
                 }
                 return $q.reject(response);
             }
         };
     }]);
