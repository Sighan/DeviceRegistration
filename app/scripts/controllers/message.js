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
            $scope.messages = messageService.getMessages();
        }

        $scope.dismiss = function (type) {
            messageService.printAndClear(type);
        };

        messageService.onUpdate(update);

        messageService.printAndClear();
    }]);
