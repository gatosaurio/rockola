Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){ return Meteor.subscribe("songs"); }
});


Router.route('/add-song', {name: 'userSongs'});

