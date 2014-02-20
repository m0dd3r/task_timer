'use strict';

var TaskService = function($timeout) {
  var Task = function() {
    var _self = this;
    this.name = null;
    this.time = 0;
    var timer = null;
    var tick = function() {
      _self.time++;
      timer = $timeout(tick,1000);
    };
    this.start = function() {
      timer = $timeout(tick,0);
    };
    this.stop = function() {
      $timeout.cancel(timer);
      timer = null;
    };
    this.toggle = function() {
      if (timer) {
        this.stop();
      }else {
        this.start();
      }
      return timer;
    };
  };

  this.createTask = function() {
    return new Task();
  };
};

TaskService.$inject = ['$timeout'];
angular.module('taskTimerApp').service('TaskService', TaskService);
