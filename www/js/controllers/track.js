angular.module('starter.controllers')
.controller('TrackCtrl', function($scope, $filter, $ionicModal, HabitsFactory, DatesFactory) {

  // TODO: change "todayData" to "thisDayData", and use relevant date instead of 'today'
  var today = $filter('date')(new Date(), 'yyyy-MM-dd');

  $scope.toggleHabit = function(index) {
    console.log(index);
    // toggle the data
    DatesFactory.toggleHabit(today, index);
    // then update data for display
    $scope.todayData = DatesFactory.getDataForDate(today);
  };
  $scope.tabTitle = today;

  $scope.habits = HabitsFactory.getHabits();
  $scope.noHabits = $scope.habits.length > 0 ? false : true;
  $scope.todayData = DatesFactory.getDataForDate(today);


  // MODAL
  $scope.editList = function() {
    $scope.modal.show();
  };

  $ionicModal.fromTemplateUrl('templates/modals/edit-habit-list.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
});
