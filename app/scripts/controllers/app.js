'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('AppCtrl', function ($scope) {
        $scope.date = new Date();
    });
