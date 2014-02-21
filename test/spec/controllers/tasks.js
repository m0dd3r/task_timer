describe('Controller: TasksCtrl', function () {

  // load the controller's module
  beforeEach(module('taskTimerApp'));

  var TasksCtrl,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TasksCtrl = $controller('TasksCtrl', {
      $scope: scope
    });
  }));

  it('it adds a list of tasks to the scope', function () {
    expect(scope.tasks.length).toBe(0);
  });

  describe('addTask()', function() {
    it('adds $scope.task to $scope.tasks', function() {
      var task = {name: 'test task'};
      scope.task = task;
      scope.addTask();
      expect(scope.tasks.length).toBe(1);
      expect(scope.tasks[0].name).toBe(task.name);
    });
  });
});
