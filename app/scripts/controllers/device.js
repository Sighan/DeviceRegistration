'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:DeviceCtrl
 * @description
 * # DeviceCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('DeviceCtrl',['$scope', '$state', '$location', 'deviceService', function ($scope, $state, $location, deviceService) {

        $scope.hasMaintenance = false;
        $scope.hasNotification = false;
        $scope.date = new Date();

        //Fill dropdowns with some test values
        $scope.categories = ['Category #1', 'Category #2', 'Category #3'];
        $scope.groups = ['Group #1', 'Group #2', 'Group #3'];
        $scope.mediums = ['Medium #1', 'Medium #2', 'Medium #3'];

        //Add some test devices
        for(var i=1; i<=5; i++) {
            deviceService.saveDevice(
                {
                    id: i,
                    category: 'Flow',
                    designation: 'Device #' + i,
                    group: 'Magnetic Flowmeters',
                    serial: '1234-5678-9' + i,
                    medium: 'Cool medium',
                    comment: 'This is just a test device',
                    labels: [
                        'Label #1', 'Label #2', 'Label #3'
                    ],
                    maintenance: {
                        interval: i +' months',
                        start: '23.06.2015'
                    },
                    notification: {
                        reminder: i +' year',
                        mail: 'max@mustermann.de'
                    }
                }
            );
        }

        $scope.device = {};

        $scope.save = function(device) {
            device.id = Math.floor((Math.random() * 50) + 1);
            if(deviceService.saveDevice(device)) {
                $location.path('/devices/all');
            };
        }
        $scope.update = function() {

        }
        $scope.delete = function(device) {
            if(deviceService.deleteDevice(device.id)) {
                $location.path('/devices/all');
            }
        }
        $scope.get = function() {
            var id = $state.params.id;
            if(angular.isNumber(id)) {
                $scope.device = deviceService.loadDevice(id);
            }
        }
        $scope.getAll = function() {
            $scope.devices = deviceService.loadDevices();
        }
        $scope.reset = function(form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            $scope.device = angular.copy($scope.master);
        };
    }]);
