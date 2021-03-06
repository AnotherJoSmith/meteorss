// Publish the user's feeds.
Meteor.publish("feeds", function(){
	return Feeds.find({userId: this.userId});
});

// Publish the user's articles for this feed.
Meteor.publish("articles", function(){
	return Articles.find({userId: this.userId});
});


Articles.allow({
	update: function(userId, doc, fieldNames, modifier ){
		return doc.userId == userId;
	}
});

Feeds.allow({
	update: function(userId, doc, fieldNames, modifier){
		return doc.userId == userId;
	},
	remove: function(userId, doc){
		return doc.userId == userId;
	}
});

Accounts.onLogin(function(){
	Meteor.call("refreshFeeds");
});
