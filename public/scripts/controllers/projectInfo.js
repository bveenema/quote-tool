'use strict';

angular.module('quotingToolApp')
.controller('projectInfoCtrl', ['$scope', '$compile', 'dataService', function($scope,$compile, dataService) {
  $scope.trucks = [];
  
  dataService.getTrucks(function(response) {
      $scope.trucks = response.data.trucks;
      console.log($scope.trucks);  
    });


}]);