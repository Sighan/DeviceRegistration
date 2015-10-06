'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('LoginCtrl', ['$scope', '$state', '$localStorage', 'authService', 'messageService', 'valdr',
        function ($scope, $state, $localStorage, authService, messageService, valdr) {

            $scope.signin = function (user, isValid) {
                console.log(isValid);
                if (isValid) {
                    authService.signin(user)
                    .success(function (res) {
                            $state.go('app.devices.all');
                          })
                    .error(function () {
                            messageService.logError('Invalig credentials');
                            messageService.printAndClear();
                          });
                }
            };

            $scope.signup = function (user, isValid) {
                if (isValid) {
                    authService.signup(user)
                    .success(function () {
                            $state.go('app.devices');
                          })
                    .error(function () {
                            //Hier ordentliches errorhandling einbauen
                            messageService.logError('Account could not be created');
                            messageService.printAndClear();
                          });
                }
            };

            $scope.logout = function () {
                authService.logout().success(function () {
                    $state.go('access.login');
                    messageService.logInfo('You have been logged out.');
                });
            };

        }
    ])
;
