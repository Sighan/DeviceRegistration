'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.authService
 * @description
 * # authService
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
     .factory('authService', ['$localStorage', 'restService', function ($localStorage, restService) {

         return {
             signin: function (data) {
                 var loginRequest = {};
                 loginRequest.load={};
                 loginRequest.load.EmailAddress = data.email;
                 loginRequest.load.Password = data.pass;
                 return restService.auth.signIn(loginRequest).success(function(res){
                    $localStorage.token=res.AccessToken;
                 });
             },
             logout: function () {
                 delete $localStorage.token;
                 return restService.auth.signOut();
             },
             hasValidToken: function () {
                 if (typeof $localStorage.token === 'undefined') {
                   return false;
                 } else {
                  return true;
                 }
             }
         };
     }
   ]);
