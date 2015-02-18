Meteor.startup(function() {
  var count = Session.get("counter");
  if (count <= 0) {
    setTimeout(function() {
      Session.update("counter", 3);
    }, 5000);
  }

});