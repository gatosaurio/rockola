/*Meteor.subscribe('songs');*/

Template.userSongs.helpers({
  'songs': function(){
     return Songs.find({}, {sort: {createdAt: -1}});  
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
    
  }
});