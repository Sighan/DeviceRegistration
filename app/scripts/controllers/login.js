'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('LoginCtrl', ['$scope', '$location', 'authService',
        function ($scope, $location, authService) {

            $scope.fakeLogin = function () {
                console.log("Fake login...");
                $location.path('devices');
            }

            $scope.signin = function (user, isValid) {
                if (isValid) {
                    authService.signin(formData,
                        function () {
                            //$location.path("/");
                            alert("Login successful! Yay")
                        }
                        , function () {
                            //Hier ordentliches errorhandling einbauen
                            alert("Invalid credentials");
                        })
                }
            };

            $scope.register = function (user, isValid) {
                if (isValid) {
                    authService.signup(formData,
                        function () {
                            //$location.path("/login");
                            alert("Account created")
                        }
                        , function () {
                            //Hier ordentliches errorhandling einbauen
                            alert("Account could not be created");
                        })
                }
            };

        }]);
