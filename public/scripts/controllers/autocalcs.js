'use strict';

angular.module('quotingToolApp')
.controller('autoCalcsCtrl', function($scope, $timeout, dataService) {
  $scope.engineeringFee = 	{
   														override: 1000,
						   								calculated: 1000,
						   								waive: false
						   							};
   
	$scope.deliveryTime = 		{
						   								override: 3,
						   								calculated: 3,
							   							waive: false
						   							};
   
  $scope.deliveryCharge = 	{
						   								override: 420,
						   								calculated: 420,
						   								waive: false
						   							};
  
  // dataService.getTrucks(function(response) { 
  //     console.log(response.data);  
  //     $scope.trucks = response.data;
  //   });


});