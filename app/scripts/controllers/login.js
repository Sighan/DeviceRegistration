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
                    authService.signin(user,
                        function (res) {
                            messageService.logError("test");
                            messageService.logInfo("test");
                            $state.go('app.devices.all');
                        }, function () {
                            messageService.logError('Invalig credentials');
                            messageService.printAndClear();
                        });

                }
            };

            $scope.signup = function (user, isValid) {
                if (isValid) {
                    authService.signup(user,
                        function () {
                            $state.go('app.devices');
                        }, function () {
                            //Hier ordentliches errorhandling einbauen
                            messageService.logError('Account could not be created');
                            messageService.printAndClear();
                        });
                }
            };

            $scope.logout = function () {
                authService.logout(function () {
                    messageService.logInfo('You have been logged out.');
                    $state.go('access.login');
                });
            };

        }
    ])
;
