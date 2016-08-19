'use strict';

angular.module('quotingToolApp')
.controller('autoCalcsCtrl', function($scope, $timeout, dataService) {
   $scope.engineeringFee = 1000;
   $scope.deliveryTime = 3;
   $scope.deliveryCharge = 420;
  
  // dataService.getTrucks(function(response) { 
  //     console.log(response.data);  
  //     $scope.trucks = response.data;
  //   });


});