/*Meteor.subscribe('songs');*/

Template.userSongs.helpers({
  'songs': function(){
     return Songs.find({})
  },
})

Template.userSongs.events({
  "submit form": function(event){
    event.preventDefault();
   /* var currentUserId = Meteor.userId();*/
    var url  = event.target.url.value;
    var urlMod = url.replace("watch?v=", "v/");
       
   Songs.insert({
      urlMod: urlMod,
      comment: "",
      approved: false,
      
    });
    
    event.target.url.value = ""
    
    return false;
    
  }
});