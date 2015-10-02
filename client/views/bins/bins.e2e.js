'use strict';

describe('bins route', function () {

  beforeEach(function () {
    browser.get('/bins');
  });

  it('should have a list of bins', function () {
    expect(element.all(by.id('bins'))).toBe('BinsCtrl');
  });

});
