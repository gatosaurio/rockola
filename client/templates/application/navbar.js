Template.navBar.helpers({
  'votes': function(){
    var user = Meteor.user();
    return user.remaining_votes;
  }
  
});