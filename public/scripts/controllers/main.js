'use strict';

angular.module('quotingToolApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.quoteLayout = [];
  
  dataService.getQuoteLayout(function(response) {
      $scope.quoteLayout = response.data.quoteLayout;
      console.log($scope.quoteLayout);  
    });


});