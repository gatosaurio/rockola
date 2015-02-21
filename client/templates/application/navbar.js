Template.navBar.helpers({
  /*'votes': function(){
    
  },
  'userData': function(){
    var userId = Meteor.user()._id;
    return Meteor.users.findOne({_id: userId});
  },*/
  'votes': function(){
    return Session.get('votes');
  }
  
});