/* Tracker.autorun = function(){
    var duration = $('.playing').data('duration');
    console.log(duration);
    var interval, timeLeft;

    timeLeft = function() {
      if (duration > 0) {
        duration--;
        Session.set("time", duration);
        
        return console.log(duration);
      } else {
        console.log("That's All Folks");
        return Meteor.clearInterval(interval);
      }
    };
    interval = Meteor.setInterval(timeLeft, 1000);
 };*/

Template.player.rendered = function(){
  var songs = Songs.find({current: true});
  var handle = songs.observeChanges({
    added: function(id,song){
    var duration = song.duration;
    console.log(duration);
    var interval, timeLeft;
    timeLeft = function() {
      if (duration > 0) {
        duration--;
        Session.set("time", duration);
        return console.log(duration);
      } else {
        console.log("That's All Folks");
        Meteor.call('setDone',id);
        return Meteor.clearInterval(interval);
        
      }
    };
    interval = Meteor.setInterval(timeLeft, 1000);
    },
    removed: function(){
      console.log("no more")
    }
  });
};

Template.player.helpers({
  'player': function(){
    return Songs.find({});
  },
  'time': function() {
    return Session.get("time");
  }
  
});
