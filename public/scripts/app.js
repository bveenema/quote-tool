angular.module('quotingToolApp',['ngMaterial', 'ngMessages', 'ngAnimate'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
	    .primaryPalette('grey')
	    .accentPalette('blue')
	    .warnPalette('green');

	$mdThemingProvider.theme('validateTheme')
	    .primaryPalette('blue')
	    .accentPalette('green')
	    .warnPalette('red');

	$mdThemingProvider.theme('form-dark', 'default')
	    .primaryPalette('grey')
	    .accentPalette('green')
	    .warnPalette('red')
	    .dark();
  
	  $mdThemingProvider.theme('form-light', 'default')
	    .primaryPalette('grey')
	    .accentPalette('green')
	    .warnPalette('red');
  })