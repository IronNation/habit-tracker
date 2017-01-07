angular.module('starter.services')
.factory('DatesFactory', function (HabitsFactory) {

  var habitsList = HabitsFactory.getHabits();

  var calendarData = [
    {
      date: '2017-05-03', 
      habits: [
        {
          name: 'One',
          done: true
        },{
          name: 'Two',
          done: true
        }
      ]
    },{
      date: '2017-05-04', 
      habits: [
        {
          name: 'One',
          done: true
        },{
          name: 'Two',
          done: false
        }
      ]
    }
  ];

  function getData() {
    // TODO: localstorage stuff will go here

    // this gives each habit item its color and icon from HabitsFactory
    angular.forEach(calendarData, function(date, i) {
      angular.forEach(date.habits, function(dateHabit, j) {
        for(var k = 0; k < habitsList.length; k++) {
          var listHabit = habitsList[k];
          if (dateHabit.name === listHabit.name) {
            dateHabit.icon = listHabit.icon;
            dateHabit.color = listHabit.color;
            break;
          }
        }
      });
    });
    return calendarData;
  }

  return {
    getData: getData
  };

});
