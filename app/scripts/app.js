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
    'ngStorage',
    'ngTouch',
    'ui.router',
    'ngStorage'
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
            .state('app', {
                abstract: true,
                templateUrl: 'views/app.html',
                data: {
                    requiresLogin: true
                }
            })
            .state('app.devices', {
                url: '/devices',
                templateUrl: 'views/devices/all.html'
            })
            .state('access', {
                abstract: true,
                controller: 'LoginCtrl',
                template: '<div class="h-full bg-dark"><div ui-view class="fade-in-right-big smooth"></div></div>'
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

        $httpProvider.interceptors.push('requestInterceptor');
    })
    .run(function($rootScope, stateChangeInterceptor) {
      $rootScope.$on('$stateChangeStart', stateChangeInterceptor);
    });
