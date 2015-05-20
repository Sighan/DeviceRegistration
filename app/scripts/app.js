'use strict';

/**
 * @ngdoc overview
 * @name deviceRegistrationApp
 * @description
 * # deviceRegistrationApp
 *
 * Main module of the application.
 */
angular
  .module('deviceRegistrationApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]).constant('urls', {
        API: 'http://<hier api domain eingeben>'
    })
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/login');
        //
        // Now set up the states
        $stateProvider
            .state('access', {
                abstract: true,
                controller: 'LoginCtrl',
                template: '<div class="h-full triangular-primary"><div ui-view class="fade-in-right-big smooth"></div></div>'
            })
            .state('access.login', {
                url: '/login',
                templateUrl: 'views/login/login.html'
            })
            .state('access.register', {
                url: '/register',
                templateUrl: 'views/login/register.html'
            })
            .state('access.forgotpwd', {
                url: '/forgotpwd',
                templateUrl: 'views/login/forgotpwd.html'
            });

        $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
           return {
               'request': function (config) {
                   config.headers = config.headers || {};
                   if ($localStorage.token) {
                       config.headers.Authorization = 'Bearer ' + $localStorage.token;
                   }
                   return config;
               },
               'responseError': function (response) {
                   if (response.status === 401 || response.status === 403) {
                       $location.path('/login');
                   }
                   return $q.reject(response);
               }
           };
        }]);
    });
