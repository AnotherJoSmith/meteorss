Feeds = new Meteor.Collection("feeds");

Meteor.methods({
  addFeed: function(url){
    var user = Meteor.user();
    if(!user){
      throw new Meteor.Error(401, "You need to login to add new feeds.");
    }

    if(!url){
      throw new Meteor.Error(422, "Please input a url");
    }

    if(Feeds.findOne({url: url, userId: user._id})){
      throw new Meteor.Error(400, "Feed already added");
    }

    var feed = {
      url: url,
      userId: user._id,
      added: new Date().getTime()
    }

    Feeds.insert(feed);
  }
})
