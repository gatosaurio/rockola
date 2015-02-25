Router.configure({
  layoutTemplate: 'layout'
});

Router.route('root', {
  template: 'playList',
  path: '/',
  loadingTemplate: "loading",
  waitOn: function() {
     return [
       Meteor.subscribe('approvedSongs')
       //Meteor.subscribe('remainingVotes')
     ]
  }
  
});

Router.route('userSongs', {
  template: 'userSongs',
  path: '/mis-canciones',
  loadingTemplate: "loading",
  waitOn: function() { return Meteor.subscribe('userSongs');
  }
});

Router.route('admin', {
  template: 'adminSongs',
  path: '/admin339',
  waitOn: function() {
     return [
       Meteor.subscribe('allSongs')
     ]
  }
});

Router.route('users', {
  template: 'usersList',
  path: '/userslist',
  loadingTemplate: "loading",
  waitOn: function() {
     return [
       Meteor.subscribe('users')
       //Meteor.subscribe('remainingSongs')
     ]
  }
});









