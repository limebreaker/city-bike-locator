'use strict';

/**
 * @ngdoc filter
 * @name dublinBikesApp.filter:geoDistance
 * @function
 * @description
 * # geoDistance
 * Filter in the dublinBikesApp.
 */
angular.module('dublinBikesApp')
  .filter('geoDistance', function () {
    return function (input) {
      if (input >= 1000) {
   		return (input/1000).toFixed(2) + 'km';
      } else {
        return input + 'm';
      }
    };
  });
