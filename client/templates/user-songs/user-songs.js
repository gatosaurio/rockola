/*Meteor.subscribe('songs');*/

Session.setDefault("counter", 3);
Session.makePersistent("counter");

Template.userSongs.helpers({
  'songs': function(){
     return Songs.find({}, {sort: {createdAt: -1}});  
  },
  
  'counter': function(){
    return Session.get('counter');
  },
  
  'disableForm': function(){
      var counter = Session.get('counter');
      if(counter === 0){
        return "disabled"
      }
    }
  
});

Template.userSongs.events({
  "submit form": function(event){
    event.preventDefault();
   /* var currentUserId = Meteor.userId();*/
    var url  = event.target.url.value;
    var urlMod = url.replace("watch?v=", "v/");
    
    if (url.indexOf("youtube.com") !=-1) {
     Songs.insert({
      urlMod: urlMod,
      comment: "",
      approved: false,
      createdAt: new Date(),
    });
    } else {
      alert("No Way Jose! SOLO videos de YouTube!")
    }
    
    event.target.url.value = ""
    
    return false;
  },
  'click .send': function(){
    Session.set("counter", Session.get("counter") - 1);
  }
});