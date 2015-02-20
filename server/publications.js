Meteor.publish("allSongs", function(){
  return Songs.find({});
});

/*Meteor.publish("userSongs", function() {
  var creator = Meteor.users.find({_id: this.userId});
  return Songs.find({createdBy: creator});
});*/
  

Meteor.publish("approvedSongs", function(){
  return Songs.find({checked: true});
});

