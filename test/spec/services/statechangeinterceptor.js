'use strict';

describe('Service: stateChangeInterceptor', function () {

  // load the service's module
  beforeEach(module('deviceRegistrationApp'));

  // instantiate service
  var stateChangeInterceptor;
  beforeEach(inject(function (_stateChangeInterceptor_) {
    stateChangeInterceptor = _stateChangeInterceptor_;
  }));

  it('should do something', function () {
    expect(!!stateChangeInterceptor).toBe(true);
  });

});
