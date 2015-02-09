Session.setDefaultPersistent("counter", 3);

Meteor.startup(function () {
  var count = Session.get("counter");
  if(count === 0){
    setTimeout(function() {
      Session.update("counter", 3);
    }, 5000);
  
  }
});

Template.userSongs.helpers({
  'songs': function(){
    var creator = Meteor.user();
    return Songs.find({createdBy: creator}, {sort: {createdAt: -1}});  
  },
  
  'counter': function(){
    var count = Session.get('counter');
    return count;
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
     var url  = event.target.url.value;
    /*var yt_id = urlMod.match(/.{11}$/g);*/
    Meteor.call('insertLink', url);
    event.target.url.value = ""
      
  },
  
  'click .send': function(){
    var count =  Session.get("counter");
    Session.set("counter", count - 1);
    
  }
});