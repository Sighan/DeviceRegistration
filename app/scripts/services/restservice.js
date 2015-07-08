'use strict';

/**
 * @ngdoc service
 * @name deviceRegistrationApp.restService
 * @description
 * # restService
 * Service in the deviceRegistrationApp.
 *
 * Call any function with a request object. The request object may contain the following properties:
 * load: request content
 * success: success callback function
 * error: error callback function
 */
angular.module('deviceRegistrationApp')
  .service('restService', function ($http, urls) {

    function post(endPoint, request) {
      if (typeof request==='undefined') {
        request={};
      }
      return $http.post(urls.API + endPoint, request);
    }

    return {
      auth: {
        signIn: function(request) {
          var endPoint = '/Authorization/Login';
          return post(endPoint,request);
        },
        signOut: function(request) {
          var endPoint = '/Authorization/Logout';
          return post(endPoint,request);
        }
      },
      user: {
        add: function(request) {
          var endPoint = '/User/AddUser';
          return post(endPoint,request);
        },
        update: function(request) {
          var endPoint = '/User/ModUser';
          return post(endPoint,request);
        },
        get: function(request){
          var endPoint = '/User/GetUserByMail';
          return post(endPoint,request);
        },
        createInvitation: function(request) {
          var endPoint = '/User/AddInvitation';
          return post(endPoint,request);
        },
        changePassword: function(request) {
          var endPoint = '/User/ChangePassword';
          return post(endPoint,request);
        },
        forgotPassword: function(request) {
          var endPoint = '/User/SendPasswordRequest';
          return post(endPoint,request);
        },
        disable: function(request) {
          var endPoint = '/User/Deactivate';
          return post(endPoint,request);
        }
      },
      device: {
        add: function(request) {
          var endPoint = '/Device/SaveUpdateDevice ';
          return post(endPoint,request);
        },
        update: function(request) {
          var endPoint = '/Device/SaveUpdateDevice ';
          return post(endPoint,request);
        },
        getById: function(request){
          var endPoint = '/Device/GetDeviceByID';
          return post(endPoint,request);
        },
        getLabels: function(request) {
          var endPoint = '/Device/GetLabelsForCompany';
          return post(endPoint,request);
        },
        getCategories: function(request) {
          var endPoint = '/Device/ChangePassword';
          return post(endPoint,request);
        },
        getGroupsByCategorie: function(request) {
          var endPoint = '/Device/GetGroupsByCategory';
          return post(endPoint,request);
        },
        disable: function(request){
           var endPoint = '/Device/Disable';
           return post(endPoint,request);
        },
        addUser: function(request) {
           var endPoint = '/Device/AddUser';
           return post(endPoint,request);
        },
        removeUser: function(request) {
           var endPoint = '/Device/AddUser';
           return post(endPoint,request);
        },
        addLabel: function(request) {
           var endPoint = '/Device/AddLabel';
           return post(endPoint,request);
        },
        getList: function(request) {
           var endPoint = '/Device/GetList';
           return post(endPoint,request);
        }
      },
      company: {
        add: function(request) {
          var endPoint = '/Company/Add';
          return post(endPoint,request);
        },
        get: function(request) {
          var endPoint = '/Company/Get';
          return post(endPoint,request);
        },
        update: function(request) {
          var endPoint = '/Company/Update';
          return post(endPoint,request);
        }
      }
    };
  });
