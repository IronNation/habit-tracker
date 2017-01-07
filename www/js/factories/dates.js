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

  function addDateToData(date) {
    // TODO: should this be prepended? or sorted?
    var newDate = {
      date: date,
      habits: []
    };
    angular.forEach(habitsList, function(habit, i) {
      newDate.habits.push({
        name: habit.name,
        done: false,
        icon: habit.icon,
        color: habit.color
      });
    });
    calendarData.push(newDate);
    console.log(calendarData);
    // TODO: also save it to localstorage, but without the icon & color

    return newDate;
  }

  function getDataForDate(date) {
    for(var i = 0; i < calendarData.length; i++) {
      var dateData = calendarData[i];
      if (dateData.date === date) {
        return dateData;
      }
    }
    // if there's no data, create it
    return addDateToData(date);
  }

  return {
    getData: getData,
    getDataForDate: getDataForDate
  };

});
