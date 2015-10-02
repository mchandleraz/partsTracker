'use strict';

angular.module('partsTracker')
  .factory('Bin', function ($resource) {
    return $resource('/api/bins/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  });
