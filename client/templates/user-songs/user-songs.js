Session.setDefaultPersistent("counter", 5);

Template.userSongs.helpers({
  'uSongs': function() {
    //var userId = Meteor.user()._id;
    //var creator = Meteor.users.findOne(_id = userId);
    var creator = Meteor.user();
    return Songs.find({
      createdBy: creator
    }, {
      sort: {
        score: -1, createdAt: -1
      }
    });
  },
  
  'counter': function() {
    var count = Session.get('counter');
    return count;
  },

  'disableForm': function() {
    var counter = Session.get('counter');
    if (counter <= 0) {
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
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      var video_id = match[2];
      jQuery.getJSON("http://gdata.youtube.com/feeds/api/videos/" + video_id + "?v=2&alt=json", function(data) {
        var videoTitle = data.entry.title.$t;
        var title = videoTitle;
        var score = 0;

        Meteor.call('insertSong',video_id,title,score,creator)
      });

      event.target.url.value = "";
    } else {
      //error
      alert("URL Incorrecta");
    }
  },

  'click .send': function() {
    var count = Session.get("counter");
    Session.set("counter", count - 1);

  }
});