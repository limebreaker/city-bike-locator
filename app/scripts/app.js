'use strict';

/**
 * @ngdoc overview
 * @name dublinBikesApp
 * @description
 * # dublinBikesApp
 *
 * Main module of the application.
 */
angular
  .module('dublinBikesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'geolocation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/favourites', {
        templateUrl: 'views/favourites.html',
        controller: 'FavouritesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
