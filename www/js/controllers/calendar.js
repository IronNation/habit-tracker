angular.module('starter.controllers')
.controller('CalendarCtrl', function($scope, $filter) {

  var today = new Date();
  $scope.tabTitle = $filter('date')(today, 'mediumDate');
  
});
