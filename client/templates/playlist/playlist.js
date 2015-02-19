
Template.playList.helpers({
  'playList': function(){
    return Songs.find({}, {sort: {score: -1, createdAt: -1} });
  },
  'selectedClass': function(){
    var songId = this._id;
    var selectedSong = Session.get('selectedSong');
    if( songId == selectedSong ){
      return 'selected'
    }
  },
  'visibleClass': function(){
    var songId = this._id;
    var selectedSong = Session.get('selectedSong');
    if( songId == selectedSong ){
      return 'visible'
    }
  }
  
});

Template.playList.events({
  'click .card': function(){
    var songId = this._id;
    Session.set('selectedSong', songId);
  },
  'click .btn-vote': function(){
    var selectedSong = Session.get('selectedSong');
    Meteor.call('updateScore',selectedSong);
  }
});