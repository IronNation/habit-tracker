angular.module('starter.controllers')
.controller('AddHabitCtrl', function($scope, $timeout, COLORS, ICONS, HabitsFactory) {
  this.colors = COLORS;
  this.icons = ICONS;

  this.showColorOptions = true;
  this.showIconOptions = true;

  this.setDefaults = function() {
    this.name = '';
    this.icon = 'ion-ribbon-a';
    this.color = '#2c3e50';
  };
  this.setDefaults();

  this.createHabit = function(name) {
    this.showHide = false;
    // this.name = name;
    console.log(this.name);
    HabitsFactory.addHabit(name, this.icon, this.color);

    // reset on close
    this.setDefaults();

    $scope.modal.hide();
  };
  this.selectColor = function(color) {
    this.color = color;
    this.showColorOptions = false;
  };
  this.selectIcon = function(icon) {
    this.icon = icon;
    this.showIconOptions = false;
  };
  this.cancelNewHabit = function() {
    this.setDefaults();
    $scope.modal.hide();
  };

});
