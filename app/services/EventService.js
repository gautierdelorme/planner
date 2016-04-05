// app/services/EventService.js

/**
  * Event service: in charge of the communication with Firebase
**/

angular.module('planner').factory('EventService', EventService);

function EventService ($firebaseArray) {
  var EventService = {}

  EventService.ref = new Firebase("https://planner31.firebaseio.com/events")
  EventService.events = $firebaseArray(EventService.ref)

  EventService.addEvent = function (typeEvent) {
    this.events.$add({name:"event",type:typeEvent}).then(function(ref) {
      var id = ref.key()
      console.log("added record with id " + id)
    })
  };

  EventService.removeEvent = function(event) {
    this.events.$remove(event)
  }
  return EventService;
}
