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
    //var approved = event.target.myCheckbox.value;
    var status = tmpl.find('.status').value;
    
    Meteor.call('updateCommentStatus', songId,comment,status);
    event.target.comment.value = "";
    //event.target.approved.value = "";
  },
  
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    var songId = this._id;
    var approved;
    Meteor.call('updateApproved', songId,approved);
  }
});

Template.adminSongs.helpers({
  isMyCheckboxChecked: function(value) {
    return (value = true ? 'checked' : '');
  }
});