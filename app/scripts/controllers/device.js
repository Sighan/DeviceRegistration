'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:DeviceCtrl
 * @description
 * # DeviceCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('DeviceCtrl', function ($scope) {
        $scope.hasMaintenance = false;
        $scope.hasNotification = false;
        $scope.date = new Date();
    });
