'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('AppCtrl', ['$scope', 'userService', function ($scope, userService) {
        $scope.date = new Date();
        userService.getUserData().success(function(res){
          $scope.userData = res;- yxcycxcxyasdasdadsadsasd
        });
    }]);
