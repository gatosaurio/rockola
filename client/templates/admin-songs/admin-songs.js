Template.adminSongs.helpers ({
  'adminSongs': function(){
    return Songs.find({}, {sort: {createdAt: -1}})
  }
});

Template.adminSongs.events({
  'submit form': function(event,tmpl){
    event.preventDefault();
    var songId = this._id;
    var comment = event.target.comment.value; 
    var status = tmpl.find('.status').value;
    Songs.update(
      {_id: songId}, 
      {$set: {comment: comment, status: status}}
    );  
    event.target.comment.value = "";
    //event.target.status.value = "";
  },
  
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    Songs.update(this._id, {$set: {approved: ! this.approved}});
  }
  
  /*"change .status": function(event, tmpl){
    var songId = this._id;
    var status = tmpl.find('.status').value;
    Songs.update(
      {_id: songId}, 
      {$set: {status: status}}
    ); 
  }*/
  
});
