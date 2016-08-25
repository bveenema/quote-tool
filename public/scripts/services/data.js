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
  this.getQuoteLayout = function(callback){
  	$http.get('api/quotelayout')
  	.then(callback);
  }
  this.getFeeTable = function(callback){
    $http.get('api/feetable')
    .then(callback);
  }
});