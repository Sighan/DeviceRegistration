'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('LoginCtrl', ['$scope', '$state', 'authService',
        function ($scope, $state, authService) {

            $scope.fakeLogin = function () {
                console.log("Fake login...");
                $location.path('devices');
            }

            $scope.signin = function (user, isValid) {
                if (isValid) {
                    authService.signin(user,
                        function (res) {
                            $localStorage.token = res.token;
                            $state.transitionTo("app.devices");
                        }
                        , function () {
                            //Hier ordentliches errorhandling einbauen
                            alert("Invalid credentials");
                        })
                }
            };

            $scope.signup = function (user, isValid) {
                if (isValid) {
                    authService.signup(user,
                        function () {
                            $state.transitionTo("app.devices");
                        }
                        , function () {
                            //Hier ordentliches errorhandling einbauen
                            alert("Account could not be created");
                        })
                }
            };

        }]);
