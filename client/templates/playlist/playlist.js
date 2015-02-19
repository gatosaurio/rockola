Template.playList.helpers({
  'playList': function(){
    return Songs.find({});
  },
  'selectedClass': function(){
    var songId = this._id;
    var selectedSong = Session.get('selectedSong');
    if( songId == selectedSong ){
      return 'selected'
    }
  }
  
});

Template.playList.events({
  'click .card': function(){
    var songId = this._id;
    Session.set('selectedSong', songId);
  }
});