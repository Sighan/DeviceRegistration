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
                 loginRequest.Email = data.email;
                 loginRequest.Password = data.pass;
                 /* This has to happen regardless of context, therefore it's written in the service */
                 return restService.auth.signIn(loginRequest).success(function(res){
                    $localStorage.token=res.AccessToken;
                 });
             },
             logout: function () {
                 delete $localStorage.token;
                 /* This will probably return nothing, just added it for completion */
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
