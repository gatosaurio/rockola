/*Meteor.publish('userData', function() {
  if(!this.userId) return null;
  return Meteor.users.find(this.userId, {fields: {
    remaining_votes: 1,
  }});
});
*/
Meteor.publish("allSongs", function(){
  return Songs.find({});
});

Meteor.publish("userSongs", function(){
  var userId = Meteor.users.find(this.userId);
  var creator = Meteor.users.findOne(_id = userId)
  return Songs.find({createdBy: creator});
});

Meteor.publish("approvedSongs", function(){
  return Songs.find({checked: true});
});



/*Meteor.publish('users', function() {
    return Meteor.users.find({}, {fields: {services: 1}});
});*/
