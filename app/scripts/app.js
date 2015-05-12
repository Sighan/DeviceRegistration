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
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');
        //
        // Now set up the states
        $stateProvider
            .state('access', {
                abstract: true,
                controller: 'LoginCtrl',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('access.login', {
                url: '/login',
                templateUrl: 'views/login/login.html'
            })
            .state('access.register', {
                url: '/signup',
                templateUrl: 'views/login/register.html'
            })
            .state('access.forgotpwd', {
                url: '/forgotpwd',
                templateUrl: 'views/login/forgotpwd.html'
            });
    });
