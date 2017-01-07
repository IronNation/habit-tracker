angular.module('starter.controllers')
.controller('CalendarCtrl', function($scope, HabitsFactory) {

  $scope.habits = HabitsFactory.getHabits();
  $scope.noHabits = $scope.habits.length > 0 ? false : true;
  console.log($scope.habits);
  
});
