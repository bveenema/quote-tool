'use strict';

angular.module('quotingToolApp')
.service('dataService', function($http) {
  this.getBlocks = function(callback){
    $http.get('mock/blockData.json')
    .then(callback);
  };
  this.getTrucks = function(callback){
  	$http.get('mock/truckData.json')
  	.then(callback);
  }
});