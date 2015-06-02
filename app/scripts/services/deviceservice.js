'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.deviceService
 * @description
 * # deviceService
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
  .service('deviceService', function () {


        var devices = [];
        return {
            saveDevice: function (device) {
                devices.push(device);
                return true;
            },
            loadDevice: function (id) {
                return _.find(devices, function(obj) { return obj.id == id; });
            },
            loadDevices: function (options) {
                return [].concat(devices);
            },
            deleteDevice: function (id) {
                return (devices = _.reject(devices, function(obj){ return obj.id == id; }));
            },
            updateDevice: function (device) {
                return null;
            }
        };
  });
