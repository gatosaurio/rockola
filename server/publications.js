Meteor.publish("allSongs", function(){
  return Songs.find({});
});

Meteor.publish("userSongs", function(){
  var user = Meteor.users.findOne(this.userId);
  var creator = user.services.twitter.id;
  return Songs.find({creatorId: creator });
});    

Meteor.publish("currentSong", function(){
  return Songs.find({current: true, done:false});
});  

Meteor.publish("doneSongs", function(){
  return Songs.find({done:true});
}); 

Meteor.publish("approvedSongs", function(){
  return Songs.find({checked: true, ready:false});
});

Meteor.publish('users', function() {
    return Meteor.users.find({}, {fields: {services: 1, remaining_votes: 1,remaining_songs: 1}});
});

Meteor.publish('remainingVotes', function() {
  return Meteor.users.find(this.userId, {fields: {
    remaining_votes: 1
  }});
});

Meteor.publish('remainingSongs', function() {
  return Meteor.users.find(this.userId, {fields: {
    remaining_songs: 1
  }});
});

