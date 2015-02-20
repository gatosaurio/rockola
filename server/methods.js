Meteor.methods({
  'insertSong': function(video_id,title,score,creator){
    Songs.insert({
      video_id: video_id,
      title: title,
      score: score,
      comment: "",
      status: "Pendiente",
      approved: false,
      createdAt: new Date(),
      createdBy: creator
    });
  },
  'updateCommentStatus': function(songId,comment,status){
    Songs.update(
      {_id: songId}, 
      {$set: {comment: comment, status: status}}
    );  
  },
  
  'removeSong': function(selectedSong){
     Songs.remove(selectedSong)
  },
  
  'vote': function(selectedSong){
    Songs.update(selectedSong, {$inc: {score: 1} });
  }
});


