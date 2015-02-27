Template.doneSongs.helpers({
  'doneSongs': function(){
    return Songs.find({}, {sort: {createdAt: -1} });
  }
});