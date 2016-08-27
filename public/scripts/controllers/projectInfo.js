'use strict';

angular.module('quotingToolApp')
.controller('projectInfoCtrl', function($scope, dataService) {
  $scope.trucks = [];

  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });

  var feeTable = {};


// FUNCTION: Calculate the engineering fee with markup
  var calculateEngineerFee = function(sqft){
    if(typeof sqft !== 'number'){
      console.log("sqft must be a number", sqft);
      return "error";
    }
    if(sqft <= feeTable.minCharge1.max){
      return feeTable.minCharge1.fee*(1+feeTable.markup);
    }
    if(sqft >= feeTable.minCharge2.min && sqft <= feeTable.minCharge2.max){
      return feeTable.minCharge2.fee*(1+feeTable.markup);
    }
    for(var i=feeTable.engineerFee.length-1; i>=0; i--){
      if(sqft >= feeTable.engineerFee[i][0]){
        if(typeof feeTable.engineerFee[i][1] ==='number'){
          return sqft*feeTable.engineerFee[i][1]*(1+feeTable.markup);
        }else{
          return feeTable.engineerFee[i][1];
        }
      }
    }
  };

// SCOPE FUNCTION: Udate engineering Fee
  $scope.updateEngFee = function(sqft){
    $scope.engineeringFee.calculated = Number(calculateEngineerFee(sqft).toFixed(0));
    if($scope.engineeringFee.userUpdated === false){
      $scope.engineeringFee.override = $scope.engineeringFee.calculated;
    }
  }


// DATASERVICE: Get Fee Table
  dataService.getFeeTable(function(response){
    feeTable = response.data.feeTable;
  });

// DATASERVICE: Get trucks
  dataService.getTrucks(function(response) {
    $scope.trucks = response.data.trucks;
  });


});