Template.addFeed.events({
  "submit form": function(evt){
    evt.preventDefault();
    var feed = $(evt.target).find("[name=feed]").val();
    Meteor.call('addFeed', feed, function(error){
      if(error){
        console.log(error.reason);
      }
    });
  }
});
