Template.sidebar.events({
  "click #sync-feeds": function(evt){
    $("#sync-feeds").button("loading");
    Meteor.call("refreshFeeds", function(error){
      $("#sync-feeds").button("reset");
      if(error){
        console.log(error);
      }
    });
  }
});

function changeFolder(folder){
    console.log("This doesn't work");
}
