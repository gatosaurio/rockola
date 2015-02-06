Meteor.publish("allSongs", function(){
  return Songs.find()
});

/*Meteor.publish("userSongs", function(){
  var creator = Meteor.user();
  return Songs.find({createdBy: creator });
});*/

Meteor.publish("approvedSongs", function(){
  return Songs.find({approved: true});
});

