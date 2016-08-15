'use strict';

angular.module('quotingToolApp')
.controller('autoCalcsCtrl', function($scope, $timeout, dataService) {
   $scope.engineeringFee = 1000;
   $scope.deliveryTime = 3;
   $scope.deliveryCharge = 420;

   $scope.blurMe = function(block, count, $index) {

    if(/^\+?(0|[1-9]\d*)$/.test(count) || count == ""){

      while(block.count[$index]==null){
        block.count.push(0);
      }

  		$scope.totalWeight -= block.weight*block.count[$index];
  		$scope.totalWeight += block.weight*count;

  		block.count[$index] = count;

  	}else{
  		console.log(count +" is NOT a number");
  	}
  }
  
  // dataService.getTrucks(function(response) { 
  //     console.log(response.data);  
  //     $scope.trucks = response.data;
  //   });


});