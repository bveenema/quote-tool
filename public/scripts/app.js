angular.module('quotingToolApp',['ngMaterial', 'ngMessages'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
	    .primaryPalette('grey')
	    .accentPalette('blue')
	    .warnPalette('green');
  
  })
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('validateTheme')
    .primaryPalette('blue')
    .accentPalette('green')
    .warnPalette('red')
});