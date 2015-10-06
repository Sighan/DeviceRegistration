'use strict';

/**
 * @ngdoc function
 * @name deviceRegistrationApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the deviceRegistrationApp
 */
angular.module('deviceRegistrationApp')
    .controller('AdminCtrl', function ($scope, $interval, uuid4) {

        /* Once the API is finished this can be rewritten to use restService.user.getInivte(). Note that this
           should either happen via userService, where a new methods would have to be added, or an entirely new
           service (adminService maybe).
        */



        var user = {
            email: '',
            firstname: '',
            lastname: ''
        };
        $scope.users = [];
        $scope.users.push(user);

        $scope.invite = function (users, isValid) {
            if (isValid) {
                console.log(users);
            }
        };

        $scope.addInvite = function () {
            $scope.users.push(angular.copy(user));
        };

        //This piece of code is shit
        //Fakes progress with $interval
        $scope.progress = 0;
        $scope.generate = function () {
            $interval(function () {
                $scope.progress++;
                if ($scope.progress === 5) {
                    $scope.token = uuid4.generate();
                    console.log($scope.token);
                }
            }, 500, 5);
        };
    });
