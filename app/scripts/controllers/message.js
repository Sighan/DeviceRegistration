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
            angular.element('.header-fixed').css('padding-top', ($scope.messages.length + 1) * 50 + 'px');
        }

        $scope.dismiss = function (type) {
            messageService.printAndClear(type);
            angular.element('.header-fixed').css('padding-top', '');
        };

        messageService.onUpdate(update);

        messageService.printAndClear();
    }]);
