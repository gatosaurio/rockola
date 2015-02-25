Meteor.startup(function() {
  Tracker.autorun(function() {
  Meteor.subscribe('users');
  Meteor.subscribe('remainingVotes');
  Meteor.subscribe('remainingSongs');
});
 

});
