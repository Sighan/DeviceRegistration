'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:ErrorCtrl
 * @description
 * # MessageCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
  .controller('MessageCtrl', ['$scope', 'messageService', function ($scope, messageService) {

     function update() {
        $scope.errors = messageService.getErrors();
        $scope.warns = messageService.getWarns();
        $scope.infos = messageService.getInfos();
     }
     messageService.onUpdate(update);

     messageService.printAndClear();
  }]);
