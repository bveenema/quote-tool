angular.module('quotingToolApp',['ngMaterial'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('light-green')
      .warnPalette('deep-orange');
  
  });