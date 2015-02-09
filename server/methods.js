Meteor.methods({
  'insertLink': function(url){
    var creator = Meteor.user();
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
      if (match && match[2].length == 11) {
       var video_id = match[2];
       Songs.insert({
        video_id: video_id,
        comment: "",
        status: "Pendiente",
        approved: false,
        createdAt: new Date(),
        createdBy: creator
      });
      } else {
        //error
        alert("URL Incorrecta");
      }
  }
});
