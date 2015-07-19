'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:DeviceCtrl
 * @description
 * # DeviceCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('DeviceCtrl', ['$scope', '$state', '$location', 'deviceService', 'messageService', function ($scope, $state, $location, deviceService, messageService) {

        $scope.hasMaintenance = false;
        $scope.hasNotification = false;
        $scope.date = new Date();
        $scope.devFilter = {};


        //Fill dropdowns with some test values
        $scope.categories = ['Category #1', 'Category #2', 'Category #3'];
        $scope.groups = ['Group #1', 'Group #2', 'Group #3'];
        $scope.mediums = ['Medium #1', 'Medium #2', 'Medium #3'];
        $scope.labels = ['Label #1', 'Label #2', 'Label #3'];
        $scope.ranges = ['Weekly', 'Monthly'];

        //Add some test devices
        for (var i = 1; i <= 2; i++) {
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
                        $scope.labels[Math.floor((Math.random() * $scope.labels.length))], $scope.labels[Math.floor((Math.random() * $scope.labels.length * 2))]
                    ],
                    maintenance: {
                        interval: i + ' months',
                        start: '23.06.2015'
                    },
                    notification: {
                        reminder: i + ' year',
                        mail: 'max@mustermann.de'
                    }
                }
            );
        }

        $scope.save = function (device, isValid) {
            if (isValid) {
                if (!angular.isNumber(device.id)) {
                    device.id = Math.floor((Math.random() * 100) + 1);
                }
                device.labels = device.labels.split(',');
                for (var i = 0, len = device.labels.length; i < len; i++) {
                    device.labels[i] = device.labels[i].trim();
                }
                if (deviceService.saveDevice(device)) {
                    messageService.logSuccess(device.designation + ' saved successfully');
                    $state.go('app.devices.all');
                }
            }
        };
        $scope.update = function () {

        };
        $scope.delete = function (device) {
            if (deviceService.deleteDevice(device.id)) {
                $scope.getAll();
                messageService.logSuccess(device.designation + ' deleted.' );
                if ($state.is('app.devices.all')){
                  messageService.printAndClear();
                } else {
                  $state.go('app.devices.all');
                }
            }
        };
        $scope.get = function () {
            var id = $state.params.id;
            if (angular.isNumber(id)) {
                $scope.device = deviceService.loadDevice(id);
            } else {
                $scope.device = {};
            }

        };
        $scope.getAll = function () {
            $scope.devices = deviceService.loadDevices();
        };
        $scope.reset = function (form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            $scope.device = angular.copy($scope.master);
        };

        $scope.filterByLabel = function(label) {
          $scope.devFilter.search=label;
          $state.go('app.devices.all');
        };

        $scope.addRandomDevice = function () {
          var newID = deviceService.loadDevices().length + 1
          deviceService.saveDevice(
              {
                  id: newID,
                  category: 'Flow',
                  designation: 'Device #' + newID,
                  group: 'Magnetic Flowmeters',
                  serial: '1234-5678-9' + i,
                  medium: 'Cool medium',
                  comment: 'This is just a test device',
                  labels: [
                      $scope.labels[Math.floor((Math.random() * $scope.labels.length))], $scope.labels[Math.floor((Math.random() * $scope.labels.length * 2))]
                  ],
                  maintenance: {
                      interval: newID + ' months',
                      start: '23.06.2015'
                  },
                  notification: {
                      reminder: newID + ' year',
                      mail: 'max@mustermann.de'
                  }
              }
          );
          $scope.devices=deviceService.loadDevices();
        };



    }]);
