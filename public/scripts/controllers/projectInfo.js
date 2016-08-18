'use strict';

angular.module('quotingToolApp')
.controller('projectInfoCtrl', function($scope, dataService) {
  $scope.trucks = [];

  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });  
  
  dataService.getTrucks(function(response) {
      $scope.trucks = response.data.trucks;
      console.log($scope.trucks);  
    });


});