angular.module('starter.controllers')
.controller('CalendarCtrl', function($scope, DatesFactory) {

  $scope.calendarData = DatesFactory.getData();

});
