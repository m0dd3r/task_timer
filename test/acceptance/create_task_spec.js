'use strict';

describe("task timer homepage", function() {
  var getStartedBox, taskList;
  beforeEach(function() {
    browser.get("#/");
    getStartedBox = element(by.css(".jumbotron"));
    taskList = element(by.css(".panel-default"));
  });

  describe("when there are no tasks", function() {
    it("shows the get started box", function() {
      expect(getStartedBox.isDisplayed()).toBe(true);
    });

    it("doesn't show the task list", function() {
      expect(taskList.isDisplayed()).toBe(false);
    });
  });

  describe("after adding a task", function() {
    beforeEach(function() {
      element(by.model("task.name")).sendKeys("work on task timer");
      element(by.css(".btn")).click();
    });

    it("shows the task list", function() {
      expect(taskList.isDisplayed()).toBe(true);
    });

    it("shows the task in the list", function() {
      var task = element(by.binding("task"));
      expect(task.getText()).toEqual("work on task timer");
    });

    it("hides the Get Started box", function() {
      expect(getStartedBox.isDisplayed()).toBe(false);
    });
  });
});

