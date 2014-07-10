Template.sidebar.events({
  "click #sync-feeds": function(evt){
    Meteor.call("refreshFeeds", function(error){
      if(error){
        console.log(error);
      }
    });
  }
});

function changeFolder(folder){
    console.log("This doesn't work");
}
