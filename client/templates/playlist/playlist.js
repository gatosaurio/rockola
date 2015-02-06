Template.playList.helpers({
  'playList': function(){
    return Songs.find({}, {sort: {createdAt: -1}});
  }
});