'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.userService
 * @description
 * # userService
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
  .service('userService', function (restService) {


      return {
        addUser: function(userData) {
            var request=userData;
            return restService.user.addUser(request);
        },
        getUserData: function() {
            return restService.user.get();
        },
        getUserDataByMail: function(mail){
            var request={};
            request.mail = mail;
            return restService.user.get(request);
        },
        updateUser: function(userData){
            var request=userData;
            return restService.user.update(request);
        },
        deactivateUser: function(mail){
            var request={};
            request.mail = mail;
            return restService.user.disable(request);
        },
        activateUser: function(mail){
            var request={};
            request.mail = mail;
            return restService.user.get(request);
        }
      };

  });
