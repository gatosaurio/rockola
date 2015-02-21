Tracker.autorun(function() {
  Meteor.subscribe('users');
  //git Meteor.subscribe('userData');
});

Meteor.startup(function() {
  var count = Session.get('counter');
  //var votes = Session.get('votes');
    var userId = Meteor.user()._id;
    var user = Meteor.users.findOne({_id: userId});
    var votes = user.remaining_votes;
    Session.set('votes', votes);
    Session.get('votes');
  /*if (count <= 0) {
    setTimeout(function() {
      Session.update('counter', 3);
    }, 5000);
  }
  if (votes <= 0) {
    setTimeout(function() {
      Session.update('votes', 13);
    }, 5000);
  }*/
});
