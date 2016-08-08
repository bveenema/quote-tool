'use strict';

angular.module('quotingToolApp')
.directive('projectinfo', function() {
	return {
		templateUrl: 'templates/project-info.html',
		controller: 'projectInfoCtrl',
		replace: true
	}
});