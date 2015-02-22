Meteor.publish("allSongs", function(){
  return Songs.find({});
});

Meteor.publish("userSongs", function(){
  //Meteor.users.find(this.userId, {fields: { remaining_votes: 1}});
  if(this.userId) {
    var user = Meteor.users.findOne(this.userId);
    return Meteor.songs.find({createdBy: user});
    }
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