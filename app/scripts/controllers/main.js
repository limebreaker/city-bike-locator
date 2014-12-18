'use strict';

/**
 * @ngdoc function
 * @name cityBikeLocatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cityBikeLocatorApp
 */
angular.module('cityBikeLocatorApp')
  .controller('MainCtrl', function ($scope, $http, geolocation, localStorageService) {
    $scope.url = 'http://api.citybik.es/v2/networks/dublinbikes';
    $scope.stations = false;
    $scope.userLocation = false;
    $scope.predicate = 'name';
    $scope.toggleFavourite = '';
    $scope.quantity = 0;
    
    localStorageService.set('stations');
    $scope.unbind = localStorageService.bind($scope, 'stations');
    
    $scope.unbind = localStorageService.bind($scope, 'favouriteStations');
    if (!$scope.favouriteStations) {
        $scope.favouriteStations = [];
    }

    geolocation.getLocation().then(function(data){
        $scope.userLocation = {latitude:data.coords.latitude, longitude:data.coords.longitude};
        calculateDistances();
        $scope.quantity = 10;
        $scope.predicate = 'distance';
    });
    
    $http.get($scope.url).then(function(response) {
        $scope.stations = response.data.network.stations;
        if ($scope.userLocation) {
            $scope.quantity = 10;
            $scope.predicate = 'distance';
            calculateDistances();
        } else {
            $scope.quantity = $scope.stations.length;
            $scope.predicate = 'name';
        }
        checkFavourite();
    });

    function calculateDistances() {
        angular.forEach($scope.stations, function(station, key) {
            $scope.stations[key].distance = distance(station.latitude, station.longitude, $scope.userLocation.latitude, $scope.userLocation.longitude);
        });
    }


    function checkFavourite() {
        angular.forEach($scope.stations, function(station, key) {
            if ($scope.favouriteStations.indexOf(station.id) === -1) {
                $scope.stations[key].favourite = false;
            } else {
                $scope.stations[key].favourite = true;
            }
        });
    }

    function distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        //var radlon1 = Math.PI * lon1/180;
        //var radlon2 = Math.PI * lon2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === 'K') { dist = dist * 1.609344; }
        if (unit === 'N') { dist = dist * 0.8684; }
        return Math.round(dist*1000);
    }                                                                           
    
  });
