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

        function runUpdateFunctions() {
            callbackFunctions.forEach( function (callback) {
                callback();
            });
        }

        function clearMessagesByType(type) {
            type = type || 'all';
            if (type==='all') {
              messages = [];
              return;
            }

            var newMessageList = [];
            messages.forEach(function (entry) {
                if (entry.type !== type) {
                    newMessageList.push(entry);
                }
            });
            messages=newMessageList;
        }

        function logEntry(message, type) {
            var newEntry = {};
            newEntry.type = type;
            newEntry.message = message;
            messages.push(newEntry);
        }

        function getMessagesByType(type) {
            type = type || 'all';
            if (type === 'all') {
              return messages;
            }
            var messageList = [];
            messages.forEach(function (entry) {
                if (entry.type === type) {
                    messageList.push(entry);
                }
            });
            return messageList;
        }

        /* Used for sorting by Type */
        function messageComparator(a,b) {
          var typeOrder={
            'error': 1,
            'success': 2,
            'warn': 3,
            'info': 4
          };

          if (typeOrder[a.type]>typeOrder[b.type]) {
            return 1;
          }
          if (typeOrder[a.type]<typeOrder[b.type]) {
            return -1;
          }
          return 0;
        }


        return {
            logSuccess: function (message) {
                logEntry(message, 'success');
            },
            logError: function (message) {
                logEntry(message, 'error');
            },
            logWarn: function (message) {
                logEntry(message, 'warn');
            },
            logInfo: function (message) {
                logEntry(message, 'info');
            },
            getMessages: function (type) {
                var messageList = getMessagesByType(type);
                messageList.sort(messageComparator);
                return messageList;
            },
            clear: function (type) {
                clearMessagesByType(type);
            },
            onUpdate: function (callbackFunction) {
                callbackFunctions.push(callbackFunction);
            },
            printAndClear: function (type) {
                runUpdateFunctions();
                clearMessagesByType(type);
            },
            print: function () {
                runUpdateFunctions();
            }
        };
    }]);
