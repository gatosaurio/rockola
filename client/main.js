Meteor.startup(function() {
  var count = Session.get('counter');
  var votes = Session.get('votes');
  if (count <= 0) {
    setTimeout(function() {
      Session.update('counter', 3);
    }, 5000);
  }
  if (votes <= 0) {
    setTimeout(function() {
      Session.update('votes', 13);
    }, 5000);
  }
});
