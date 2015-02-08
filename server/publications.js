Meteor.publish("allSongs", function(){
  return Songs.find();
});

/*Meteor.publish("userSongs", function() {
  user = this.userId(); 
  return Songs.find({createdBy: user });
});*/
  

Meteor.publish("approvedSongs", function(){
  return Songs.find({approved: true});
});

