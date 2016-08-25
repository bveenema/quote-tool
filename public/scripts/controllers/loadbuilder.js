'use strict';

angular.module('quotingToolApp')
.controller('loadBuilderCtrl', function($scope, dataService) {
  $scope.blocks = {};

  $scope.totalWeight = 0;

  $scope.walls = [1];
  


// SCOPE FUNCTION: sum the weight of all blocks in all walls
  $scope.sumWeights = function(block, count, $index) {

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

// SCOPE FUNCTION: Add a wall to the load builder
  $scope.addWall = function() {
    $scope.walls.push($scope.walls.length+1);
  }

// DATASERVICE: Get Blocks
  dataService.getBlocks(function(response) { 
      response.data.blocks.forEach(function(object){
        object.blocks.forEach(function(block){
          block.count = [];
        })
        
      })
      $scope.blocks = response.data.blocks;
      console.log($scope.blocks);
    });
  
});