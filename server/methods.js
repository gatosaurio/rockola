Meteor.methods({
  'insertSong': function(video_id,title,score,creator,creatorId,duration){
    Songs.insert({
      video_id: video_id,
      title: title,
      score: score,
      duration: duration,
      current: false,
      done: false,
      comment: "",
      status: "Pendiente",
      checked: false,
      createdAt: new Date(),
      createdBy: creator,
      creatorId: creatorId
    });
  },
  'updateComment': function(songId,comment){
    Songs.update(
      {_id: songId}, 
      {$set: {comment: comment}}
    );  
  },
  'updateStatus': function(songId){
    Songs.update(
    {_id: songId},
    {$set: {status: "Aprobado"}}  
    );
  },
  
  'removeSong': function(selectedSong){
     Songs.remove(selectedSong)
  },
  
  'vote': function(selectedSong){
    Songs.update(selectedSong, {$inc: {score: 1} });
  },
  'setCurrent':function(songId){
    Songs.update(songId, {$set: {current:true}});
  },
  'setDone':function(songId){
    Songs.update(songId, {$set: {current:false, done: true}});
  },
  'toggleChecked': function(songId){
    Songs.update(songId, {$set: {checked: ! songId.checked}});
  },
  'decreaseVotes': function(user){
    Meteor.users.update(user, {$inc: {remaining_votes: -1} });
  },
  'decreaseSongs': function(user){
    Meteor.users.update(user, {$inc: {remaining_songs: -1}});
  },
  'restoreSongs': function(user){
    Meteor.users.update(user, {$set: {remaining_songs: 5}});
  },
  'restoreVotes': function(user){
    Meteor.users.update(user, {$set: {remaining_votes: 20}});
  }
  
});


