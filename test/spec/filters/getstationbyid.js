'use strict';

describe('Filter: getStationById', function () {

  // load the filter's module
  beforeEach(module('cityBikeLocatorApp'));

  // initialize a new instance of the filter before each test
  var getStationById;
  beforeEach(inject(function ($filter) {
    getStationById = $filter('getStationById');
  }));

  it('should return the input prefixed with "getStationById filter:"', function () {
    var text = 'angularjs';
    expect(getStationById(text)).toBe('getStationById filter: ' + text);
  });

});
