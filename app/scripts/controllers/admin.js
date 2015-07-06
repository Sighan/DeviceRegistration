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
            $scope.invited = true;
        }

        $scope.generate = function () {
            $scope.progress = 0;
            $interval(function () {
                $scope.progress++;
                if ($scope.progress == 5) {
                    $scope.token = uuid4.generate();
                    console.log($scope.token);
                }
            }, 500, 5);
        }
    });
