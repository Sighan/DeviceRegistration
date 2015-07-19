'use strict';
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
                if (_.find(devices, function (obj) {
                        return obj.id === device.id;
                    })) {
                    this.updateDevice(device);
                }
                else {
                    devices.push(device);
                }
                alert("test");
                return true;
            },
            loadDevice: function (id) {
                return _.find(devices, function (obj) {
                    return obj.id === id;
                });
            },
            loadDevices: function (options) {
                return [].concat(devices);
            },
            deleteDevice: function (id) {
                return (devices = _.reject(devices, function (obj) {
                    return obj.id === id;
                }));
            },
            updateDevice: function (device) {
                //It's a reference _.find
                var obj = _.find(devices, function (obj) {
                    return obj.id === device.id;
                });
                if (obj) {
                    obj = device;
                    return true;
                }
                return false;
            }
        };
    });
