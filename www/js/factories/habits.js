angular.module('starter.services')
.factory('HabitsFactory', function ($injector, $filter) {

  var habits = [
    // {
    //   name: 'One', 
    //   icon: 'ion-ribbon-a', 
    //   color: '#2980b9'
    // },{
    //   name: 'Two',
    //   icon: 'ion-trophy',
    //   color: '#27ae60'
    // }
  ];

  function getHabits() {
    // localstorage stuff will go here

    return habits;
  }

  function addHabit(name, icon, color) {
    var habit = {
      name: name,
      icon: icon,
      color: color
    };
    habits.push(habit);
    // TODO: this needs to add the habit to every date in DatesFactory's calendarData

    // the habit also needs to be added to today's list
    $injector.get('DatesFactory').addHabitToDates(habit);
  }

  return {
    getHabits: getHabits,
    addHabit: addHabit
  };

});
