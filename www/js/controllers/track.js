angular.module('starter.controllers')
.controller('TrackCtrl', function($scope, $filter, $ionicModal, ionicDatePicker, HabitsFactory, DatesFactory) {

  // TODO: change "todayData" to "thisDayData", and use relevant date instead of 'today'
  var today = $filter('date')(new Date(), 'yyyy-MM-dd');
  var selectedDay = today;

  $scope.toggleHabit = function(index) {
    console.log(index);
    // toggle the data
    DatesFactory.toggleHabit(selectedDay, index);
    // then update data for display
    $scope.todayData = DatesFactory.getDataForDate(selectedDay);
  };
  $scope.tabTitle = $filter('date')(selectedDay, 'mediumDate');

  $scope.habits = HabitsFactory.getHabits();
  $scope.noHabits = $scope.habits.length > 0 ? false : true;
  $scope.selectedDayData = DatesFactory.getDataForDate(selectedDay);


  // CALENDAR MODAL
  var pickerSettings = {
    callback: function (val) {
      console.log($filter('date')(val, 'yyyy-MM-dd'));
      selectedDay = $filter('date')(val, 'yyyy-MM-dd');
      $scope.selectedDayData = DatesFactory.getDataForDate(selectedDay);
      $scope.tabTitle = $filter('date')(selectedDay, 'mediumDate');
    },
    templateType: 'modal'
  };

  $scope.openDatePicker = function() {
    ionicDatePicker.openDatePicker(pickerSettings);
  };


  // NEW HABIT MODAL
  $scope.addHabit = function() {
    $scope.modal.show();
  };

  $ionicModal.fromTemplateUrl('templates/modals/add-habit.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.$on('modal.hidden', function() {
    $scope.todayData = DatesFactory.getDataForDate(today);
    $scope.noHabits = $scope.habits.length > 0 ? false : true;
  });
  
});
