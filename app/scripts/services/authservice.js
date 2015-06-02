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
         function urlBase64Decode(str) {
             var output = str.replace('-', '+').replace('_', '/');
             switch (output.length % 4) {
                 case 0:
                     break;
                 case 2:
                     output += '==';
                     break;
                 case 3:
                     output += '=';
                     break;
                 default:
                     throw 'Illegal base64url string!';
             }
             return window.atob(output);
         }

         function getClaimsFromToken() {
             var token = $localStorage.token;
             var claims = {};
             if (typeof token !== 'undefined') {
                 var encoded = token.split('.')[1];
                 claims = JSON.parse(urlBase64Decode(encoded));
             }
             return claims;
         }

         function refreshToken() {
            $http.post(urls.API + '/refresh', $localStorage.token)
            .success(function(res) {
              $localStorage.token = res.token;
              tokenClaims=getClaimsFromToken();
            }).error(function() {
              $localStorage.token = null;
            });
         }

         var tokenClaims;

         return {
             signup: function (data, success, error) {
                 $http.post(urls.API + '/signup', data).success(success).error(error);
             },
             signin: function (data, success, error) {
                 var loginRequest = {};
                 loginRequest.EmailAddress = data.email;
                 loginRequest.Password = data.pass;

                 $http.post(urls.API + '/Authorization/Login', loginRequest).success(function (){
                    var fakeToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIxNDY0ODk0Nzk3IiwidXNlcm5hbWUiOiJNYXggTXVzdGVybWFubiJ9.lbbKpjmNPLhQOOmqTYYe6TExWVraLEDMLG_qiPPlR8M';
                    $localStorage.token=fakeToken;
                    tokenClaims=getClaimsFromToken();
                    success();
                 }).error(error);
             },
             logout: function (success) {
                 tokenClaims = {};
                 delete $localStorage.token;

                 success();
             },
             getTokenClaims: function () {
                 return tokenClaims;
             },
             hasValidToken: function () {
                 if (typeof $localStorage.token === 'undefined') {
                   return false;
                 }

                 tokenClaims = getClaimsFromToken(); //In case of page reload

                 var currentTimeInSeconds = (new Date()).getTime() / 1000;
                 if (tokenClaims.exp < currentTimeInSeconds && isInt(tokenClaims.exp)) {
                    if (typeof $localStorage.token === 'undefined') {
                      return false;
                    } else {
                      return true;
                    }
                 } else {
                    return true;
                 }
             }
         };
     }
   ]);
