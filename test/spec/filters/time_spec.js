'use strict';

describe('filter', function () {

  // load the controller's module
  beforeEach(module('taskTimerApp'));

  describe('time', function() {
    it('converts seconds into h:m:s format', inject(function(timeFilter) {
      expect(timeFilter(30)).toBe('0:0:30');
    }));
  });
});
