Tracker.autorun(function() {
  Meteor.subscribe('users');
  Meteor.subscribe('userData');
});
 Meteor.subscribe('remainingVotes');
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
    var userId = Meteor.user()._id;
    var user = Meteor.users.findOne(_id = userId);
    var remainingVotes = user.remaining_votes;
    if(remainingVotes <= 0){
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
    var userId = Meteor.user()._id;
    var user = Meteor.users.findOne(_id = userId);
    Meteor.call('decreaseVotes', user);
    //var remainingVotes = user.remaining_votes;
    //console.log(remainingVotes);
    //Session.set('votes', remaining_votes);
  }
});