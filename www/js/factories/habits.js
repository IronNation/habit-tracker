angular.module('starter.services')
.factory('HabitsFactory', function () {

  var habits = [
    {
      name: 'One', 
      icon: 'ion-ribbon-a', 
      color: '#f07300'
    },{
      name: 'Two',
      icon: 'ion-trophy',
      color: '#ffff00'
    }
  ];

  function getHabits() {
    // localstorage stuff will go here

    return habits;
  }

  function addHabit(habit) {
    // TODO: this needs to add the habit to every date in DatesFactory's calendarData, presumably
  }

  return {
    getHabits: getHabits
  };

});
