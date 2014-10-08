'use strict';

/**
 * @ngdoc function
 * @name dublinBikesApp.controller:FavouritesCtrl
 * @description
 * # FavouritesCtrl
 * Controller of the dublinBikesApp
 */
angular.module('dublinBikesApp')
  .controller('FavouritesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
