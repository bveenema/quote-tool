'use strict';

angular.module('quotingToolApp')
.service('dataService', function($http) {
  this.getBlocks = function(callback){
    $http.get('api/blocks')
    .then(callback);
  };
  this.getTrucks = function(callback){
  	$http.get('api/trucks')
  	.then(callback);
  }
});