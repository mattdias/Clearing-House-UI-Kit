define(['app', 'angular', 'authentication'], function() { 'use strict';

	return ['$scope', '$rootScope', '$route', '$browser', '$location', '$window', 'authentication', function ($scope, $rootScope, $route, $browser, $location, $window, authentication) {


        $rootScope.homePage = true;
        $rootScope.navigation = [];
        $rootScope.navigationTree = [];
    }];
});
