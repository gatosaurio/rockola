Template.userSongs.helpers({
  'uSongs': function() {
    return Songs.find({}, { sort: { score: -1, createdAt: -1 }
    });
  },
  
  'remainingSongs': function(){
    var user = Meteor.user();
    return user.remaining_songs;
  },

  'disableForm': function() {
    var user = Meteor.user();
    if (user.remaining_songs <= 0) {
      return "disabled"
    }
  }

});

Template.userSongs.events({
  "submit form": function(event) {
    event.preventDefault();
    var url = event.target.url.value;
    //var yt_id = urlMod.match(/.{11}$/g);
    var creator = Meteor.user();
    var creatorId = creator.services.twitter.id;
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      var video_id = match[2];
      jQuery.getJSON("http://gdata.youtube.com/feeds/api/videos/" + video_id + "?v=2&alt=json", function(data) {
        var videoTitle = data.entry.title.$t;
        var duration = data.entry.media$group.yt$duration.seconds;
        var title = videoTitle;
        var score = 0;

        Meteor.call('insertSong',video_id,title,score,creator, creatorId, duration);
      });

      event.target.url.value = "";
    } else {
      //error
      alert("URL Incorrecta");
    }
  },

  'click .send': function() {
    var user = Meteor.user();
    Meteor.call('decreaseSongs', user);

  }
});