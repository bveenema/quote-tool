'use strict';

angular.module('quotingToolApp')
.controller('projectInfoCtrl', function($scope, dataService) {
  $scope.trucks = [];
  
  dataService.getTrucks(function(response) {
      $scope.trucks = response.data.trucks;
      console.log($scope.trucks);  
    });


});