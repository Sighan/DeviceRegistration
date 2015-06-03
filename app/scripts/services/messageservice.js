'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.errorService
 * @description
 * # errorService
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
  .factory('messageService', [function () {
      var callbackFunctions = [];
      var messages = [];

      function runUpdateFunctions(){
        angular.forEach(callbackFunctions, function(callback) {
          callback();
        });
      }

      function clear() {
        messages = [];
      }

      function logEntry(message, type) {
        var newEntry = {};
        newEntry.type=type;
        newEntry.message=message;
        messages.push(newEntry);
      }

      function getMessagesByType(type) {
        var messageList = [];
        messages.forEach(function (entry) {
          if (entry.type===type) {
            messageList.push(entry.message);
          }
        });
        return messageList;
      }


      return {
        logError: function(message) {
          logEntry(message,'error');
        },
        logWarn: function(message) {
          logEntry(message,'warn');
        },
        logInfo: function(message) {
          logEntry(message,'info');
        },
        getErrors: function() {
          return getMessagesByType('error');
        },
        getWarns: function() {
          return getMessagesByType('warn');
        },
        getInfos: function() {
          return getMessagesByType('info');
        },
        clear: function() {
          clear();
        },
        onUpdate: function(callbackFunction) {
          callbackFunctions.push(callbackFunction);
        },
        printAndClear: function() {
          runUpdateFunctions();
          clear();
        },
        print: function() {
          runUpdateFunctions();
        }
      };
  }]);
