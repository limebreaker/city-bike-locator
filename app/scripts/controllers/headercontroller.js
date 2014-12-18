'use strict';

/**
 * @ngdoc function
 * @name cityBikeLocatorApp.controller:HeadercontrollerCtrl
 * @description
 * # HeadercontrollerCtrl
 * Controller of the cityBikeLocatorApp
 */
angular.module('cityBikeLocatorApp')
  .controller('HeadercontrollerCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });
