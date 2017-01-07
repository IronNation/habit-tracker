angular.module('starter.controllers')
.controller('CalendarCtrl', function($scope, $filter, HabitsFactory) {

  var today = new Date();
  $scope.tabTitle = $filter('date')(today, 'mediumDate');

  $scope.habits = HabitsFactory.getHabits();
  $scope.noHabits = $scope.habits.length > 0 ? false : true;
  console.log($scope.habits);
  
});
