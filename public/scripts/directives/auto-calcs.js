'use strict';

angular.module('quotingToolApp')
.directive('autocalcs', function() {
	return {
		templateUrl: 'templates/auto-calcs.html',
		controller: 'autoCalcsCtrl',
		replace: true
	}
});