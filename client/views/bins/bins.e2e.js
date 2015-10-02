'use strict';

describe('bins route', function () {

	beforeEach(function () {
		browser.get('/bins');
	});

	it('should have a list of bins', function () {
		expect(element(by.id('bins')).isPresent()).toBe(true);
	});

});
