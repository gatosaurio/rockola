Session.setDefaultPersistent('votes', 13);

Tracker.autorun(function() {
  Meteor.subscribe('users');
  Meteor.subscribe('userData');
});

Template.playList.helpers({
  'playList': function(){
    return Songs.find({}, {sort: {score: -1, createdAt: -1} });
  },
  'userData': function(){
    return Meteor.users.find({});
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
  },
  'votes': function(){
    return Session.get('votes');
  },
  'disableOwnVote': function(){
    var songId = this._id;
    var selectedSong = Session.get('selectedSong');
    var user = Meteor.user()._id;
    var mySong = Songs.findOne(id = songId );
    var creator =  mySong.createdBy;
    var creatorId = creator._id;
    if ( user === creatorId ){
      return 'disabled'
    }
  },
  'disableVote': function(){
    var songId = this._id;
    var selectedSong = Session.get('selectedSong');
    var votes = Session.get('votes');
    if(votes <= 0){
      return 'disabled'
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
    Meteor.call('vote',selectedSong);
    Session.set('votes', Session.get('votes') - 1);
  }
});