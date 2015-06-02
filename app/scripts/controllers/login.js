'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('LoginCtrl', ['$scope', '$state', '$localStorage', 'authService',
        function ($scope, $state, $localStorage, authService) {

            $scope.fakeLogin = function () {
                console.log('Fake login...');
                $state.go('app.devices');
            };

            $scope.signin = function (user, isValid) {
                if (isValid) {
                    authService.signin(user,
                        function (res) {
                            $state.go('app.devices.all');
                        }, function () {
                            //Hier ordentliches errorhandling einbauen
                            alert('Invalid credentials');
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
                            alert('Account could not be created');
                        });
                }
            };

            $scope.logout = function () {
                authService.logout( function() {
                  $state.go('access.login');
                });
            };

        }]);
