angular.module('starter.controllers')
.directive('editHabit', function() {
  return {
    controller: function($scope) {
      console.log($scope.habit);
      $scope.name = $scope.habit ? $scope.habit.name : '';
      $scope.icon = $scope.habit ? $scope.habit.icon : 'ion-ribbon-a';
      $scope.color = $scope.habit ? $scope.habit.color : '#2c3e50';
      $scope.showHide = false;
      $scope.createHabit = function() {
        console.log('create habit');
        $scope.showHide = false;
        // TODO: implement changing
      };
      $scope.finishEditingHabit = function() {
        console.log('confirm edit');
        $scope.showHide = false;
        // TODO: implement changing
      };
    },
    templateUrl: 'templates/directives/edit-habit.html'
  };
});
