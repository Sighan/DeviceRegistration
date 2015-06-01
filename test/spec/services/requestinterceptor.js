'use strict';

describe('Service: requestInterceptor', function () {

  // load the service's module
  beforeEach(module('deviceRegistrationApp'));

  // instantiate service
  var requestInterceptor;
  beforeEach(inject(function (_requestInterceptor_) {
    requestInterceptor = _requestInterceptor_;
  }));

  it('should do something', function () {
    expect(!!requestInterceptor).toBe(true);
  });

});
