'use strict';

angular.module('taskTimerApp').controller('TasksCtrl', function ($scope, TaskService) {

  $scope.addTask = function() {
    if ($scope.task.name !== null) {
      $scope.tasks.unshift($scope.task);
    }
    $scope.newTask();
  };

  $scope.newTask = function() {
    $scope.task = TaskService.createTask();
  };

  $scope.tasks = [];
  $scope.newTask();

  $scope.$on('fire_start', function(e, task) {
    if (task) {
      $scope.$broadcast('task_started', task);
    }
  });

});
