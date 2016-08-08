'use strict';

angular.module('quotingToolApp')
.directive('loadbuilder', function() {
	return {
		templateUrl: 'templates/load-builder.html',
		controller: 'loadBuilderCtrl',
		replace: true
	}
});