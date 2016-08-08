'use strict';

angular.module('quotingToolApp')
.controller('loadBuilderCtrl', function($scope, dataService) {
  $scope.blocks = {};

  $scope.totalWeight = 0;

  $scope.numWalls = 1;
  
  
  dataService.getBlocks(function(response) { 
      console.log(response.data);  
      $scope.blocks = response.data;
    });

  $scope.sumWeights = function(block, count) {
  	if(/^\+?(0|[1-9]\d*)$/.test(count) || count == ""){
  		if(!block.counted){
	  		$scope.totalWeight += block.weight*count;
	  		block.counted=true;
	  		block.prevCount=count;
	  		console.log("new block counted");
	  	}else{
	  		$scope.totalWeight -= block.weight*block.prevCount;
	  		$scope.totalWeight += block.weight*count;
	  		block.prevCount = count;
	  		console.log("block count updated");
	  	}
  	}else{
  		console.log(count +" is NOT a number");
  	}
  }

  $scope.addWall = function() {
    $scope.numWalls += 1;
  } 
});