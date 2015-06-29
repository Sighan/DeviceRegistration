'use strict';

describe('Controller: MessageCtrl', function () {

  // load the controller's module
  beforeEach(module('deviceRegistrationApp'));

  var MessageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      MessageCtrl = $controller('MessageCtrl', {
      $scope: scope
    });
  }));
});
