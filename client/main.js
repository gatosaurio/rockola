Meteor.startup(function() {
  //Session.setDefault('votes', 0);
  var count = Session.get('counter');
  var votes = Session.get('votes');
  if (count <= 0) {
    Meteor.setTimeout(function() {
      Session.update('counter', 3);
    }, 5000);
  }
  Tracker.autorun(function() {
  Meteor.subscribe('users');
  Meteor.subscribe('remainingVotes');
});
  /*if (votes <= 0) {
    Meteor.setTimeout(function() {
      Session.update('votes', 20);
    }, 5000);
  }*/
 
/*var votes = Session.get('votes');
    var userId = Meteor.user()._id;
    var user = Meteor.users.findOne({_id: userId});
    var votes = user.remaining_votes;
    Session.set('votes', votes);*/

});
