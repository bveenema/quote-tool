'use strict';

angular.module('quotingToolApp')
.controller('mainCtrl', function($scope, $filter, dataService, mapService) {
  $scope.quoteLayout = [];
  $scope.internal = {};

  var feeTable = {};

  $scope.engineeringFee = 	{
   														override: 0,
						   								calculated: 0,
						   								waive: false,
						   								userUpdated: false
						   							};
   
	$scope.deliveryTime = 		{
						   								override: 0,
						   								calculated: 0,
							   							waive: false
						   							};
   
  $scope.deliveryCharge = 	{
						   								override: 0,
						   								calculated: 0,
						   								waive: false
						   							};



// FUNCTION: Check for inputs that are TOUCHED and INVALID
  var checkTouchedAndInvalid = function(form){
  	console.log("check touched and invalid just ran");
    var returnValue = false;
    angular.forEach(form, function(value, key) {
      if (typeof value === 'object' && value.hasOwnProperty('$modelValue') && value.$touched && value.$invalid){
        returnValue =  true;
      }
    });
    return returnValue;
  };

// FUNCTION: Check that all REQUIRED inputs are VALID
  var checkRequiredAreValid = function(form){
    var requiredFormControls = [];
    var validFormControls = [];
    angular.forEach(form, function(value, key){
      if(typeof value === 'object' && value.hasOwnProperty('$modelValue') && value.$validators.hasOwnProperty('required')){
        requiredFormControls.push(value);
        if(value.$valid){
          validFormControls.push(value);
        }
      }
    });
    if(requiredFormControls.length === validFormControls.length){
      return true;
    }else{
      return false;
    }
  }

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

// SCOPE FUNCTION: Check the form validation, update the toolbar and submit if all required inputs are valid
  $scope.checkAndSubmit = function(form,index){
    if(checkTouchedAndInvalid(form)){
      $scope.quoteLayout[index].valid = "Error!";
    }else if(checkRequiredAreValid(form)){
      $scope.quoteLayout[index].valid = "Good!";
    }else {
      $scope.quoteLayout[index].valid = '';
    }

    console.log($scope.quoteLayout[index].valid);
  };


// DATASERVICE: Get Quote Layout  
  dataService.getQuoteLayout(function(response) {
      $scope.quoteLayout = response.data.quoteLayout;
      $scope.quoteLayout.forEach(function(section){
      	section.valid='';
      });
    });

// DATASERVICE: Get Fee Table
	dataService.getFeeTable(function(response){
		feeTable = response.data.feeTable;
		console.log("Fee Table", feeTable);
	})

});