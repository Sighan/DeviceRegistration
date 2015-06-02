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
            users: function () {
                return [].concat(devices);
            },
            addDevice: function (device) {
                devices.push(device);
                return true;
            },
            loadDevice: function (id) {
                return _.find(devices, function(obj) { return obj.id == id; });
            },
            loadDevices: function (options) {
                return devices;
            },
            removeDevice: function (id) {
                return (devices = _.reject(devices, function(obj){ return obj.id == id; }));
            },
            updateDevice: function (device) {
                return null;
            }
        };
  });
