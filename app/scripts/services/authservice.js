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
             var user = {};
             if (typeof token !== 'undefined') {
                 var encoded = token.split('.')[1];
                 user = JSON.parse(urlBase64Decode(encoded));
             }
             return user;
         }

         function refreshToken() {
            $http.post(urls.API + '/refresh', data)
            .success(function(res) {
              $localStorage.token = res.token;
              tokenClaims=getClaimsFromToken
            }).error(function() {
              $localStorage.token = null;
            })
         }

         var tokenClaims = getClaimsFromToken();

         return {
             signup: function (data, success, error) {
                 $http.post(urls.API + '/signup', data).success(success).error(error)
             },
             signin: function (data, success, error) {
                 //$http.post(urls.API + '/signin', data).success(success).error(error)
                 success();

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
                 if (!$localStorage.token) {
                   return false;
                 }
                 var currentTimeInSeconds = (new Date).getTime() / 1000
                 if (tokenClaims.exp < currentTimeInSeconds) {
                    return false;
                 } else {
                    return true;
                 }
             }
         };
     }
   ]);
