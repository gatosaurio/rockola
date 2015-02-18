Meteor.methods({
  'insertSong': function(video_id,title,creator){
    Songs.insert({
      video_id: video_id,
      title: title,
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
  }
  /*'updateStatus': function(songId, status){
    Songs.update(
      {_id: songId}, 
      {$set: {status: status}}
    );
  }*/
});