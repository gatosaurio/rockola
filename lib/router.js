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
     ]
  }
  
});

Router.route('userSongs', {
  template: 'userSongs',
  path: '/mis-canciones',
  loadingTemplate: "loading",
  waitOn: function() { return Meteor.subscribe('allSongs');
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









