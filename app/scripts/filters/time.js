'use strict';

angular.module('taskTimerApp').filter('time', function () {
  return function(seconds) {
    var h = Math.floor(seconds/3600).toString();
    var s = seconds % 3600;
    var m = Math.floor(seconds/60).toString();
    s = seconds % 60;
    var time = h + ':' + m + ':' + s.toString();
    return time;
  };
});
