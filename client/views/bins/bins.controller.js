'use strict';

angular.module('partsTracker')
	.controller('BinsCtrl', function () {

		var vm = this;

		angular.extend(vm, {
			bins: [
				{
					id: 'A',
					contents: [
						{
							description: 'Sporty gas tank',
							value: 10
						}
					]
				},
				{
					id: 'B',
					contents: []
				}
			]
		});

	});
