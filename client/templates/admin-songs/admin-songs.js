Meteor.subscribe('songs');

Template.adminSongs.helpers ({
  'adminSongs': function(){
    return Songs.find({})
  }
});

Template.adminSongs.events({
  'submit form': function(event){
    event.preventDefault();
    var comment = event.target.comment.value;
    
    var songId = this._id;
    
    Songs.update(
      {_id: songId}, 
      {$set: {comment: comment}}
    );
    
    console.log(songId);
    
    event.target.comment.value = "";
    
    return false;
  }
});
