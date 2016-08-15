'use strict';

var youSuck = no



angular.module('quotingToolApp')
.directive('blurMe', function($timeout) {
  return {
    scope: { trigger: '=focusMe' },
    link: function(scope, element) {
      scope.$watch('trigger', function(value) {
        if(value === true) { 
          console.log('trigger',value);
          $timeout(function() {
            element[0].blur();
            scope.trigger = false;

          });
        }
      });
    }
  };
});