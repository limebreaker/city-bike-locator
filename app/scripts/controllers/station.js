'use strict';

/**
 * @ngdoc function
 * @name cityBikeLocatorApp.controller:StationCtrl
 * @description
 * # StationCtrl
 * Controller of the cityBikeLocatorApp
 */
angular.module('cityBikeLocatorApp')
  .controller('StationCtrl', function ($scope, $routeParams, localStorageService, $filter) {
  	$scope.stationId = $routeParams.stationId;
    $scope.stations = localStorageService.get('stations');
    $scope.station = $filter('getStationById')($scope.stations, $scope.stationId);    

    localStorageService.get('favouriteStations');
    $scope.unbind = localStorageService.bind($scope, 'favouriteStations'); 

    if (!$scope.favouriteStations) {
        $scope.favouriteStations = [];
    }   

    $scope.marker = {
      id: 0,
      name: $scope.station.name,
      coords: {
        latitude: $scope.station.latitude,
        longitude: $scope.station.longitude
      },
      options: {
      	title: $scope.station.name
      },
      windowOption: {
      	visible: true
      }
    };

    $scope.toggleFavourite = function (id) {
    	if ($scope.favouriteStations.indexOf(id) === -1) {
    		$scope.favouriteStations.push(id);
    	} else {
    		$scope.favouriteStations.splice($scope.favouriteStations.indexOf(id), 1);
    	}
    	$scope.station.favourite = !$scope.station.favourite;
    };

    $scope.map = { center: { latitude: $scope.station.latitude, longitude: $scope.station.longitude }, zoom: 16 };
  });
