'use strict';

describe('Filter: geoDistance', function () {

  // load the filter's module
  beforeEach(module('cityBikeLocatorApp'));

  // initialize a new instance of the filter before each test
  var geoDistance;
  beforeEach(inject(function ($filter) {
    geoDistance = $filter('geoDistance');
  }));

  it('should return the input prefixed with "geoDistance filter:"', function () {
    var text = 'angularjs';
    expect(geoDistance(text)).toBe('geoDistance filter: ' + text);
  });

});
