'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
