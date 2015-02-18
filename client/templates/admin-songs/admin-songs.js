Template.adminSongs.rendered = function(){
  $('select').material_select();
};

Template.adminSongs.helpers ({
  'adminSongs': function(){
    return Songs.find({}, {sort: {createdAt: -1}})
  },
  'selectedClass': function(){
    var songId = this._id;
    var selectedSong = Session.get('selectedSong');
    if( songId == selectedSong ){
      return 'selected'
    }
  }
  
});

Template.adminSongs.events({
  'submit form': function(event,tmpl){
    event.preventDefault();
    var songId = this._id;
    var comment = event.target.comment.value;
    var status = tmpl.find('.status').value;
    
    Meteor.call('updateCommentStatus', songId,comment, status);
    event.target.comment.value = "";
    //event.target.approved.value = "";
  },
  'click .thumb': function(){
    var songId = this._id;
    Session.set('selectedSong', songId);
  },
  'click .remove': function(){
    var selectedSong = Session.get('selectedSong');
    Meteor.call('removeSong', selectedSong);
  }
  /*"change .status": function(event, tmpl){
    var songId = this._id;
    var status = tmpl.find('.status').value;
    Meteor.call('updateStatus', songId, status);
    }  */
});
