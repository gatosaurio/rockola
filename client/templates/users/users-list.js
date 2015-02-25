Template.usersList.helpers({
  'users': function(){
    return Meteor.users.find({});
  },
  'selectedClass': function(){
    var userId = this._id;
    var selectedUser = Session.get('selectedUser');
    if(userId == selectedUser){
      return 'selected'
    }
  },
  
});

Template.usersList.events({
  'click .collection-item': function(){
    var userId = this._id;
    Session.set('selectedUser', userId);
  },
  'click .btn-restore-songs': function(){
    var user = this._id;
    Meteor.call('restoreSongs', user);
  },
  'click .btn-restore-votes': function(){
    var user = this._id;
    Meteor.call('restoreVotes', user);
  },
  
});