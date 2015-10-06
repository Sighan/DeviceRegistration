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
    .service('deviceService', function (restService) {


        var devices = [];
        return {
            saveDevice: function (device) {
                /* Use Updatedevice here when API is finished, the backend should add a new device on its own when
                   a new device gets send (for example by setting id to -1)
                */

                if (_.find(devices, function (obj) {
                        return obj.id === device.id;
                    })) {
                    this.updateDevice(device);
                }
                else {
                    devices.push(device);
                }
                return true;
            },
            loadDevice: function (id) {
                /* Not working yet, finish API first
                request = {};
                request.id = id;
                return restService.device.getById(request);
                */

                return _.find(devices, function (obj) {
                    return obj.id === id;
                });
            },
            loadDevices: function (options) {
                /* Not working yet, finish API first
                request = options;
                return restService.device.getList(request);
                */
                return [].concat(devices);
            },
            deleteDevice: function (id) {
                /* Not working yet, finish API first
                request = {};
                request.id = id;
                return restService.device.disable(request);
                */
                return (devices = _.reject(devices, function (obj) {
                    return obj.id === id;
                }));
            },
            updateDevice: function (device) {
                //It's a reference _.find
                /* Not working yet, finish API first
                request = device;
                return restService.device.disable(device);
                */
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
