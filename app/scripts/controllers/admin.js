'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('AdminCtrl', function ($scope, $interval, uuid4) {
        $scope.invite = function (user, isValid) {
            if (isValid) {
                $scope.invited = true;
            }
        };

        //This piece of code is shit
        //Fakes progress with $interval
        $scope.progress = 0;
        $scope.generate = function () {
            $interval(function () {
                $scope.progress++;
                if ($scope.progress === 5) {
                    $scope.token = uuid4.generate();
                    console.log($scope.token);
                }
            }, 500, 5);
        };
    });
