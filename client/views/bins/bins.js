'use strict';

angular.module('partsTracker')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/bins', {
        templateUrl: 'views/bins/bins.html',
        controller: 'BinsCtrl',
        controllerAs: 'vm'
      });
  });
