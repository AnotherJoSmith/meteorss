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

var activeFolder = $("#Inbox");

Meteor.methods({
    changeFolder: function(folder) {
        var active = $("#" + folder);
        var old =  $(".selected");

        if(!activeFolder.is(active)) {
            if (old.id != "Inbox" && old.id != "Shared") {
                closeFolder(activeFolder);
            }

            if (folder != "Inbox" && folder != "Shared") {
                openFolder(active);
            }
        }

        activeFolder = active;
        console.log(activeFolder.attr("id"));
        setActive(active);
    },

    selectFeed: function(feedClasses){
        var feedName = feedClasses.replace("selected bg-primary", "");
        var active = activeFolder.parent().find("." + feedName);
        setActive(active);
    }
});

function closeFolder(folder){
    folder.children(".glyphicon").removeClass("glyphicon-folder-open").addClass("glyphicon-folder-close");
    folder.parent().children("ul").slideUp();
}


function openFolder(folder){
    folder.children(".glyphicon").removeClass("glyphicon-folder-close").addClass("glyphicon-folder-open");
    folder.parent().children("ul").slideDown();
}

function setActive(active){
    if(!active.hasClass("selected")) {
        $(".selected.bg-primary").removeClass("selected bg-primary");
        active.addClass("selected bg-primary");
    }
}