angular.module('starter.controllers')
.controller('TrackCtrl', function($scope, $filter, HabitsFactory, DatesFactory) {

  var today = new Date();
  $scope.tabTitle = $filter('date')(today, 'mediumDate');

  $scope.habits = HabitsFactory.getHabits();
  $scope.noHabits = $scope.habits.length > 0 ? false : true;
  $scope.todayData = DatesFactory.getDataForDate($filter('date')(today, 'yyyy-MM-dd'));
  console.log($scope.todayData);
});
