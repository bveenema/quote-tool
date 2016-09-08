'use strict';

angular.module('quotingToolApp')
.controller('mainCtrl', function($scope, $filter, dataService) {
  
  
  $scope.quoteLayout = [];
  $scope.internal = {};

  $scope.engineeringFee = 	{
   														override: 0,
						   								calculated: 0,
						   								waive: false,
						   								userUpdated: false
						   							};
   
	$scope.deliveryTime = 		{
						   								override: 0,
						   								calculated: 0,
							   							waive: false,
                              userUpdated: false
						   							};
   
  $scope.deliveryCharge = 	{
						   								override: 0,
						   								calculated: 0,
						   								waive: false,
                              userUpdated: false
						   							};

  $scope.route = {};


var panelRef;

$scope.showPanel = function($event) {
  var panelPosition = $mdPanel.newPanelPosition()
      .absolute()
      .top('50%')
      .left('50%');

  var panelAnimation = $mdPanel.newPanelAnimation()
      .targetEvent($event)
      .defaultAnimation('md-panel-animate-fly')
      .closeTo('.show-button');

  var config = {
    attachTo: angular.element(document.body),
    controller: DialogController,
    controllerAs: 'ctrl',
    position: panelPosition,
    animation: panelAnimation,
    targetEvent: $event,
    templateUrl: '../templates/quote-page1.html',
    clickOutsideToClose: true,
    escapeToClose: true,
    focusOnOpen: true
  }

  $mdPanel.open(config)
      .then(function(result) {
        panelRef = result;
      });
};

// function DialogController(MdPanelRef, toppings) {
//     var toppings;

//     // function closeDialog() {
//     //   MdPanelRef &amp;&amp; MdPanelRef.close();
//     // }
//   }
// }



// FUNCTION: Check for inputs that are TOUCHED and INVALID
  var checkTouchedAndInvalid = function(form){
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

// SCOPE FUNCTION: Check the form validation, update the toolbar and submit if all required inputs are valid
  $scope.checkAndSubmit = function(form,index){
    if(checkTouchedAndInvalid(form)){
      $scope.quoteLayout[index].valid = "Error!";
    }else if(checkRequiredAreValid(form)){
      $scope.quoteLayout[index].valid = "Good!";
    }else {
      $scope.quoteLayout[index].valid = '';
    }
  };



// DATASERVICE: Get Quote Layout  
  dataService.getQuoteLayout(function(response) {
      $scope.quoteLayout = response.data.quoteLayout;
      $scope.quoteLayout.forEach(function(section){
      	section.valid='';
      });
    });

});