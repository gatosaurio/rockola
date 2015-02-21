Router.configure({
  layoutTemplate: 'layout'
});

Router.route('root', {
  template: 'playList',
  path: '/',
  waitOn: function() {
     return [
       Meteor.subscribe('approvedSongs')
      
     ]
  }
});

Router.route('userSongs', {
  template: 'userSongs',
  path: '/mis-canciones',
  waitOn: function() { 
    return [
      Meteor.subscribe('allSongs'),
    ]
  }
 /* data: function () {var creator = Meteor.user(); return Songs.find({createdBy: creator}); }*/
});

Router.route('admin', {
  template: 'adminSongs',
  path: '/admin339',
  waitOn: function() { return Meteor.subscribe('allSongs');}
});




