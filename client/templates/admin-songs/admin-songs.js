Template.adminSongs.helpers ({
  'adminSongs': function(){
    return Songs.find({}, {sort: {createdAt: -1}})
  }
});

Template.adminSongs.events({
  'submit form': function(event){
    event.preventDefault();
    var comment = event.target.comment.value;
    var status = event.target.status.value;
    
    var songId = this._id;
    
    Songs.update(
      {_id: songId}, 
      {$set: {comment: comment, status: status}}
      
    );
    
    console.log(songId);
    
    event.target.comment.value = "";
    event.target.status.value = "";
    
    return false;
  },
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    Songs.update(this._id, {$set: {approved: ! this.approved}});
  }
});
