Meteor.publish("allSongs", function(){
  return Songs.find({});
});

Meteor.publish("userSongs", function(){
  var user = Meteor.users.findOne(this.userId);
  var userTw = user.services.twitter.id;
  console.log(userTw);
  return Songs.find({createdBy: userTw });
});         

Meteor.publish("approvedSongs", function(){
  return Songs.find({checked: true});
});

Meteor.publish('users', function() {
    return Meteor.users.find({}, {fields: {services: 1}});
});

/*Meteor.publish('remainingVotes', function() {
  if(!this.userId) return null;
  return Meteor.users.find(this.userId, {fields: {
    remaining_votes: 1,
  }});
});*/