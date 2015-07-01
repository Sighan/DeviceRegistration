'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.restService
 * @description
 * # restService
 * Service in the deviceRegistrationApp.
 */
angular.module('deviceRegistrationApp')
  .service('restService', function ($http, urls) {

    function post(endPoint, data, successCallback, errorCallback) {

      $http.post(urls.API + endPoint, data)
                        .success(successCallback)
                        .error(errorCallback);
    }
    return {
      auth: {
        signIn: function(data,successCallback,errorCallback) {
          var endPoint = '/Authorization/Login';
          post(endPoint,data,successCallback,errorCallback);
        },
        signOut: function(successCallback,errorCallback) {
          var endPoint = '/Authorization/Logout';
          post(endPoint,null,successCallback,errorCallback);
        }
      },
      user: {
        add: function(data, successCallback,errorCallback) {
          var endPoint = '/User/AddUser';
          post(endPoint,data,successCallback,errorCallback);
        },
        update: function(data,successCallback,errorCallback) {
          var endPoint = '/User/ModUser';
          post(endPoint,data,successCallback,errorCallback);
        },
        get: function(data,successCallback,errorCallback){
          var endPoint = '/User/GetUserByMail';
          post(endPoint,data,successCallback,errorCallback);
        },
        createInvitation: function(data,successCallback,errorCallback) {
          var endPoint = '/User/AddInvitation';
          post(endPoint,data,successCallback,errorCallback);
        },
        changePassword: function(data,successCallback,errorCallback) {
          var endPoint = '/User/ChangePassword';
          post(endPoint,data,successCallback,errorCallback);
        },
        forgotPassword: function(data,successCallback,errorCallback) {
          var endPoint = '/User/SendPasswordRequest';
          post(endPoint,data,successCallback,errorCallback);
        },
        disable: function(data,successCallback,errorCallback) {
          var endPoint = '/User/Deactivate';
          post(endPoint,data,successCallback,errorCallback);
        }
      },
      device: {
        add: function(data, successCallback,errorCallback) {
          var endPoint = '/Device/SaveUpdateDevice ';
          post(endPoint,data,successCallback,errorCallback);
        },
        update: function(data,successCallback,errorCallback) {
          var endPoint = '/Device/SaveUpdateDevice ';
          post(endPoint,data,successCallback,errorCallback);
        },
        getById: function(data,successCallback,errorCallback){
          var endPoint = '/Device/GetDeviceByID';
          post(endPoint,data,successCallback,errorCallback);
        },
        getLabels: function(successCallback,errorCallback) {
          var endPoint = '/Device/GetLabelsForCompany';
          post(endPoint,null,successCallback,errorCallback);
        },
        getCategories: function(successCallback,errorCallback) {
          var endPoint = '/Device/ChangePassword';
          post(endPoint,null,successCallback,errorCallback);
        },
        getGroupsByCategorie: function(data,successCallback,errorCallback) {
          var endPoint = '/Device/GetGroupsByCategory';
          post(endPoint,data,successCallback,errorCallback);
        },
        disable: function(data,successCallback,errorCallback){
           var endPoint = '/Device/Disbale';
           post(endPoint,data,successCallback,errorCallback);
        },
        addUser: function(data,successCallback,errorCallback) {
           var endPoint = '/Device/AddUser';
           post(endPoint,null,successCallback,errorCallback);
        },
        removeUser: function(data,successCallback,errorCallback) {
           var endPoint = '/Device/AddUser';
           post(endPoint,null,successCallback,errorCallback);
        },
        addLabel: function(data,successCallback,errorCallback) {
           var endPoint = '/Device/AddLabel';
           post(endPoint,data,successCallback,errorCallback);
        },
        getList: function(data, successCallback, errorCallback) {
           var endPoint = '/Device/GetList';
           post(endPoint,data,successCallback,errorCallback);
        }
      },
      company: {
        add: function(data, successCallback,errorCallback) {
          var endPoint = '/Company/Add';
          post(endPoint,data,successCallback,errorCallback);
        },
        get: function(successCallback,errorCallback) {
          var endPoint = '/Company/Get';
          post(endPoint,null,successCallback,errorCallback);
        },
        update: function(data,successCallback,errorCallback) {
          var endPoint = '/Company/Update';
          post(endPoint,data,successCallback,errorCallback);
        }
      }
    };
  });
