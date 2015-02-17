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
  'updateApproved': function(songId, approved){
    Songs.update({_id: songId}, {$set: {approved: ! this.approved}});
  }
});