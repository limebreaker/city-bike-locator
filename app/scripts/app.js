'use strict';

/**
 * @ngdoc overview
 * @name cityBikeLocatorApp
 * @description
 * # cityBikeLocatorApp
 *
 * Main module of the application.
 */
angular
  .module('cityBikeLocatorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'geolocation',
    'LocalStorageModule',
    'yaru22.angular-timeago',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, localStorageServiceProvider) {
    // set up routes
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
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/station/:stationId', {
        templateUrl: 'views/station.html',
        controller: 'StationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // set up local storage prefix
      localStorageServiceProvider.setPrefix('cityBikeLocatorApp');
  });
