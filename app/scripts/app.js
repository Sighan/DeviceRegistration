'use strict';

/**
 * @ngdoc overview
 * @name deviceRegistrationApp
 * @description
 * # deviceRegistrationApp
 *
 * Main module of the application.
 */


var app =
    angular.module('deviceRegistrationApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngSanitize',
        'ngStorage',
        'ngTouch',
        'ui.router',
        'ui.bootstrap',
        'ui.select',
        'valdr',
        'ngMaterial'
    ]).constant('urls', {
        API: 'http://private-72e83-devreg.apiary-mock.com/api'
    })
        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

            // For any unmatched url, redirect to...
            $urlRouterProvider.otherwise('/login');

            // Now set up the states
            $stateProvider
                .state('app', {
                    abstract: true,
                    controller: 'AppCtrl',
                    templateUrl: 'views/app.html',
                    data: {
                        requiresLogin: true
                    }
                })
                .state('app.devices', {
                    abstract: true,
                    controller: 'DeviceCtrl',
                    template: '<div ui-view class="fade-in-down"></div>',
                    url: '/devices'
                })
                .state('app.devices.detail', {
                    url: '/{id:int}',
                    templateUrl: 'views/devices/detail.html'
                })
                .state('app.devices.all', {
                    url: '',
                    templateUrl: 'views/devices/all.html'
                })
                .state('app.devices.new', {
                    url: '/new',
                    templateUrl: 'views/devices/new.html'
                })
                .state('app.devices.edit', {
                    url: '/{id:int}/edit',
                    templateUrl: 'views/devices/new.html'
                })
                .state('access', {
                    abstract: true,
                    controller: 'LoginCtrl',
                    template: '<div class="modal-over bg-black"><div ui-view class="fade-in-right-big smooth"></div></div>',
                    data: {
                        requiresNotLoggedIn: true
                    }
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
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('deep-orange')
                .accentPalette('blue-grey')
                .warnPalette('red');
        })
        .run(function ($rootScope, stateChangeInterceptor) {
            $rootScope.$on('$stateChangeStart', stateChangeInterceptor);
        });
