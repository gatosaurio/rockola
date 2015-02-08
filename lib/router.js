Router.configure({
  layoutTemplate: 'layout'
});

Router.route('root', {
  template: 'userSongs',
  path: '/',
  waitOn: function() { return Meteor.subscribe('allSongs');}
 /* data: function () {var creator = Meteor.user(); return Songs.find({createdBy: creator}); }*/
});

Router.route('admin', {
  template: 'adminSongs',
  path: '/admin339',
  waitOn: function() { return Meteor.subscribe('allSongs');}
});

Router.route('playlist', {
  template: 'playList',
  path: '/playlist',
  waitOn: function() { return Meteor.subscribe('approvedSongs');}                 
});


