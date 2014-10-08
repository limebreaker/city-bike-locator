'use strict';

/**
 * @ngdoc function
 * @name dublinBikesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dublinBikesApp
 */
angular.module('dublinBikesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
