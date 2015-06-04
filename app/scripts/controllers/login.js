'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('LoginCtrl', ['$scope', '$state', '$localStorage', 'authService', 'messageService',
        function ($scope, $state, $localStorage, authService, messageService) {

            $scope.fakeLogin = function () {
                console.log('Fake login...');
                $state.go('app.devices');
            };

            $scope.signin = function (user, isValid) {
                if (isValid && typeof user !== 'undefined')  {
                    if (user.hasOwnProperty('pass') && user.hasOwnProperty('email')) {
                      authService.signin(user,
                        function (res) {
                            $state.go('app.devices.all');
                        }, function () {
                            messageService.logError('Invalig credentials');
                            messageService.printAndClear();
                        });
                    } else {
                      messageService.logError('Please enter credentials');
                      messageService.printAndClear();
                    }
                } else {
                  messageService.logError('Please enter credentials');
                  messageService.printAndClear();
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
                authService.logout( function() {
                  messageService.logInfo('You have been logged out.');
                  $state.go('access.login');
                });
            };

        }]);
