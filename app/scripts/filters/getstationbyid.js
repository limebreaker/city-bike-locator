'use strict';

/**
 * @ngdoc filter
 * @name cityBikeLocatorApp.filter:getStationById
 * @function
 * @description
 * # getStationById
 * Filter in the cityBikeLocatorApp.
 */
angular.module('cityBikeLocatorApp')
  .filter('getStationById', function () {
    return function(input, id) {
      var i = 0, len = input.length;
      for (; i < len; i++) {
        if (input[i].id === id) {
          return input[i];
        }
      }
      return null;
    };
  });
