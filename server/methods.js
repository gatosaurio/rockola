Meteor.methods({
  'insertSong': function(video_id,title,score,creator){
    Songs.insert({
      video_id: video_id,
      title: title,
      score: score,
      comment: "",
      status: "Pendiente",
      checked: false,
      createdAt: new Date(),
      createdBy: creator
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
  'toggleChecked': function(songId){
    Songs.update(songId, {$set: {checked: ! songId.checked}});
  },
  'decreaseVotes': function(){
    //Meteor.users.update(user, {$inc: {remaining_votes: -1} });    
  }
  
});


