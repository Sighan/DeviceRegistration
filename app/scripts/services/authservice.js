'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.authService
 * @description
 * # authService
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
     .factory('authService', ['$http', '$localStorage', 'urls', function ($http, $localStorage, urls) {

         function refreshToken() {
           $http.post(urls.API + '/refresh', $localStorage.token)
            .success(function(res) {
              $localStorage.token = res.token;
            }).error(function() {
              delete $localStorage.token;
            });
         }

         return {
             signup: function (data, success, error) {
                 $http.post(urls.API + '/signup', data).success(success).error(error);
             },
             signin: function (data, success, error) {
                 var loginRequest = {};
                 loginRequest.EmailAddress = data.email;
                 loginRequest.Password = data.pass;



                 var fakeToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNDY0ODk0Nzk3IiwidXNlcm5hbWUiOiJNYXggTXVzdGVybWFubiJ9.lbbKpjmNPLhQOOmqTYYe6TExWVraLEDMLG_qiPPlR8M';
                 $localStorage.token=fakeToken;
                 success();
                 /*$http.post(urls.API + '/Authorization/Login', loginRequest).success(function (){
                    var fakeToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNDY0ODk0Nzk3IiwidXNlcm5hbWUiOiJNYXggTXVzdGVybWFubiJ9.lbbKpjmNPLhQOOmqTYYe6TExWVraLEDMLG_qiPPlR8M';
                    $localStorage.token=fakeToken;
                    success();
                 }).error(error);*/
             },
             logout: function (success) {
                 delete $localStorage.token;
                 success();
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
