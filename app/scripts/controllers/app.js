'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('AppCtrl', ['$scope', 'authService', function ($scope, authService) {
        $scope.date = new Date();
        $scope.userData = authService.getTokenClaims();
    }]);
