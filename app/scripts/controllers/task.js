'use strict';

angular.module('taskTimerApp').controller('TaskCtrl', function ($scope) {

  $scope.toggleRunning = function() {
    var t = $scope.task.toggle();
    if (t) {
      $scope.$emit('fire_start', $scope.task);
    }
  };

  $scope.$on('task_started', function(e, task) {
    if(task !== $scope.task) {
      $scope.task.stop();
    }
  });

  $scope.toggleRunning();

});
