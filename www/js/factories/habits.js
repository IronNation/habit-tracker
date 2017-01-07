angular.module('starter.services')
.factory('HabitsFactory', function () {

  console.log('HabitsFactory loaded');

  var habits = [
    {
      name: 'One', 
      icon: 'ion-ribbon-a', 
      color: '#f07300'
    },{
      name: 'Two',
      icon: 'ion-trophy',
      color: '#ffff00'
    }];

  function getHabits() {
    // localstorage stuff will go here

    return habits;
  }

  return {
    getHabits: getHabits
  };

});
