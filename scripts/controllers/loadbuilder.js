'use strict';

angular.module('quotingToolApp')
.controller('loadBuilderCtrl', function($scope, dataService) {
  $scope.blocks = {};

  $scope.totalWeight = 0;

  $scope.walls = [1,2,3];
  
  
  dataService.getBlocks(function(response) { 
      console.log(response.data);  
      $scope.blocks = response.data;
    });

  $scope.sumWeights = function(block, count, $index) {
  	console.log("Wall index: "+ $index);

    if(/^\+?(0|[1-9]\d*)$/.test(count) || count == ""){
  		if(!block.counted){
	  		$scope.totalWeight += block.weight*count;
	  		block.counted=true;
        console.log("block.counted = " +block.counted);
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
    console.log("number of walls "+$scope.walls.length);
    $scope.walls.push($scope.walls.length+1);

  } 
});