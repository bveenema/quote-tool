'use strict';

angular.module('quotingToolApp')
.controller('projectInfoCtrl', function($scope, dataService) {
  $scope.trucks = [];
  
  dataService.getTrucks(function(response) { 
      console.log(response.data);  
      $scope.trucks = response.data;
    });


});