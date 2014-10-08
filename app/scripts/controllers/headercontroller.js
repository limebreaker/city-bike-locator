'use strict';

/**
 * @ngdoc function
 * @name dublinBikesApp.controller:HeadercontrollerCtrl
 * @description
 * # HeadercontrollerCtrl
 * Controller of the dublinBikesApp
 */
angular.module('dublinBikesApp')
  .controller('HeadercontrollerCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });
