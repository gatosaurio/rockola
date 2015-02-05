Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){ return Meteor.subscribe("songs"); }
});


Router.route('/', {name: 'userSongs'});
Router.route('/admin339', {name: 'adminSongs'});
