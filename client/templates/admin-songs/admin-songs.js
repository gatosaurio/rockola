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
    
    Meteor.call('updateComment', songId,comment);
    event.target.comment.value = "";
  },
  'click .thumb': function(){
    var songId = this._id;
    Session.set('selectedSong', songId);
  },
  'click .remove': function(){
    var selectedSong = Session.get('selectedSong');
    Meteor.call('removeSong', selectedSong);
  },
  "click .toggle-checked": function () {
    var songId = this._id;
    Meteor.call('toggleChecked',songId);
    Meteor.call('updateStatus',songId);
  },
  'click .setCurrent': function(){
    var songId = this._id;
    Meteor.call('setCurrent', songId);
  },
  'click .setDone': function(){
    var songId = this._id;
    Meteor.call('setDone', songId);
  }

});
