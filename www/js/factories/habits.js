angular.module('starter.services')
.factory('HabitsFactory', function () {

  var habits = [
    {
      name: 'One', 
      icon: 'ion-ribbon-a', 
      color: '#2980b9'
    },{
      name: 'Two',
      icon: 'ion-trophy',
      color: '#27ae60'
    }
  ];

  function getHabits() {
    // localstorage stuff will go here

    return habits;
  }

  function addHabit(habit) {
    // TODO: this needs to add the habit to every date in DatesFactory's calendarData, presumably
    // or maybe not...
  }

  return {
    getHabits: getHabits
  };

});
