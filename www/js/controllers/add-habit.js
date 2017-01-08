angular.module('starter.controllers')
.controller('AddHabitCtrl', function($scope, COLORS, ICONS, HabitsFactory) {
  $scope.colors = COLORS;
  $scope.icons = ICONS;
  $scope.name = '';
  $scope.icon = 'ion-ribbon-a';
  $scope.color = '#2c3e50';
  $scope.createHabit = function(name) {
    console.log('create habit');
    $scope.showHide = false;
    $scope.name = name;
    console.log($scope.name);
    // TODO: implement changing
    HabitsFactory.addHabit($scope.name, $scope.icon, $scope.color);
    $scope.modal.hide();
  };
  $scope.selectColor = function(color) {
    $scope.color = color;
  };
  $scope.selectIcon = function(icon) {
    $scope.icon = icon;
    console.log(icon);
  };

  // TODO: reset on close
});
