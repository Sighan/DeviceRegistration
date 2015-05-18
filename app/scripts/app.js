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
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/login');
        //
        // Now set up the states
        $stateProvider
            .state('access', {
                abstract: true,
                controller: 'LoginCtrl',
                template: '<div class="v-center"><div ui-view class="fade-in-right-big smooth"></div></div>'
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
